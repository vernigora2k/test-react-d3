import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles/chart.css';

const Chart = ({xdim, ydim, margin, xdata, ydata, ydatascale, rawData, data, xdatatemp, ydatatemp}) => {

    const canvas = useRef(null)

    useEffect(() => {
        const svg = d3.select(canvas.current)
            .attr("class", "axis")

        addAxes(svg)
        // addBars(svg)
        addLineChart(svg)
        addText(svg)
        addGridLines()

    }, [xdim, ydim, margin, xdata, ydata, ydatascale, xdatatemp, ydatatemp])

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

    const addBars = (svg) => {
        const linearScale = d3.scaleLinear()
            .domain([0, d3.max(ydata)])
            .range([0, ydim])

        const scaledYData = ydata.map(yval => {
            return linearScale(yval)
        })

        svg.selectAll('rect')
            .data(scaledYData)
            .enter()
            .append('rect')
            .attr('width', xscale.bandwidth())
            .attr('height', d => {
                return d
            })
            .attr('x', (d, i) => {
                return xscale(xdata[i])
            })
            .attr('y', d => {
                return ydim - d
            })
            .attr('fill', 'gray')
    }

    const addLineChart = (svg) => {
        // const scaleX = d3.scaleBand()
        //                .domain(xdata)
        //                .range([margin.left, xdim + margin.left])
        // const scaleY = d3.scaleLinear()
        //                .domain([30, d3.max(ydata)])
        //                .range([ydim, 20])

        // // console.log(xscale)
        // for(let i = 0; i < rawData; i++) 
        //     data.push({x: scaleX(rawData[i].x) + margin,
        //                y: scaleY(rawData[i].y) + margin
        //     })
        // console.log(data)
        
        // let line = d3.line()
        //     .x(d => d.x)
        //     .y(d => d.y)

        // svg.append('g')
        //    .append('path')
        //    .attr('d', line(data))
        //    .style('stroke', 'steelblue')
        //    .style('stroke-width', 2)

        d3.csv('data.csv').then(function(data) {
            data.forEach(function(d) {
                d.date = d3.timeParse(d.data)
                d.close = +d.close
            })
        })

        const chartLine = d3.line()
            .x(value => {return (value.x + margin.top) + 30})
            .y(value => {return (value.y - 100) * 4})

        svg.select('path')
           .data([rawData])
           .join('path')
           .attr('d', value => chartLine(value))

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