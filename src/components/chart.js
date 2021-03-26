import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles/chart.css';
import csvData from './aapl.csv';

const Chart = ({ xdim, ydim, margin, xdata, ydata, ydatascale }) => {

    const canvas = useRef(null)

    useEffect(() => {
        const svg = d3.select(canvas.current)
            .attr("class", "axis")

        addAxes(svg)
        addLineChartBlue(svg)
        addText(svg)
        addGridLines()

    }, [xdim, ydim, margin, xdata, ydata, ydatascale])

    const addAxes = (svg) => {
        //xscale
        const xAxis = d3.axisBottom(xscale)

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${ydim})`)
            .attr("class", "x-axis")

        //yscale
        const yAxis = d3.axisLeft(yscale)

        svg.append('g')
            .call(yAxis)
            .attr('transform', `translate(${margin.left})`)
            .attr("class", "y-axis")
        
        //yscale additional(right)
        const yaditscale = d3.scaleLinear()
            .domain([1800, d3.max(ydatascale)])
            .range([ydim, 20])
        const yaditAxis = d3.axisRight(yaditscale)

        svg.append('g')
            .call(yaditAxis)
            .attr('transform', `translate(${margin.left + xdim})`)        
    }

    const addLineChartBlue = (svg) => {
        d3.csv(csvData).then(function(data) {
            console.log(xdim)
            data.forEach(function(d, i) {
                if (i > xdim - 961) return 
                d.date = i
                d.close = +d.close * 20 - 3900
            })
            
            const chartLine = d3.line()
            .x(value => {return (value.date) * 3 + margin.left})
            .y(value => {return (value.close - 100) /6})
            
            svg.select('path')
            .data([data])
            .join('path')
            .attr('d', value => chartLine(value))
            .style('stroke', 'steelblue')
            .style('stroke-width', 4)
        })
    }

    const addText = (svg) => {
        svg.append('text')
            .text('Synaptics')
            .attr('x', -200)
            .attr('y', 40)
            .attr('transform', `rotate(-90, ${margin.left/2}, ${margin.top/2})`)
            .attr('fill', 'blue')
        
            svg.append('text')
            .text('Japan Equities')
            .attr('x', 200)
            .attr('y', -xdim - 80)
            .attr('transform', `rotate(90, ${margin.left/2}, ${margin.top/2})`)
            .attr('fill', 'green')     
    }

    const addGridLines = () => {
        d3.selectAll("g.x-axis g.tick")
            .append("line") 
            .classed("grid-line", true) 
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 0)
            .attr("y2", - (ydim-20));

        d3.selectAll("g.y-axis g.tick")
            .append("line")
            .classed("grid-line", true)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", xdim)
            .attr("y2", 0);
    }

    var xscale = d3.scaleBand()
        .domain(xdata)
        .range([margin.left, xdim + margin.left])
        .padding(0.05)

    var yscale = d3.scaleLinear()
        .domain([30, d3.max(ydata)])
        .range([ydim, 20])

    return (
        <div className='canvas'>
            <svg
                viewBox={`0 0 ${xdim + margin.left + margin.right} ${ydim + margin.top }`}
                preserveAspectRatio='xMinYMin'
                width='100%'
                height='100%'
                style={{backgroundColor: 'beige'}}
                ref={canvas}
            >
            </svg>
        </div>
    )
}

export default Chart;