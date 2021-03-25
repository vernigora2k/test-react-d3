import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles/chart.css';

const Chart = ({xdim, ydim, margin, xdata, ydata, ydatascale, xdatatemp, ydatatemp}) => {

    const canvas = useRef(null)

    useEffect(() => {
        const svg = d3.select(canvas.current)

        addAxes(svg)
        // addBars(svg)
        addText(svg)

    }, [xdim, ydim, margin, xdata, ydata, ydatascale, xdatatemp, ydatatemp])

    const addAxes = (svg) => {
        //xscale
        const xAxis = d3.axisBottom(xscale)

        svg.append('g')
            .call(xAxis)
            .attr('transform', `translate(0, ${ydim})`)

        //yscale
        const yAxis = d3.axisLeft(yscale)

        svg.append('g')
            .call(yAxis)
            .attr('transform', `translate(${margin.left})`)
        
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

    // const xscale = d3.scaleBand()
    //     .domain(xdata)
    //     .range([margin.left, xdim + margin.left])
    //     .padding(0.05)

    // const yscale = d3.scaleLinear()
    //     .domain([30, d3.max(ydata)])
    //     .range([ydim, 20])

    const xscale = d3.scaleBand()
        .domain(xdata)
        .range([margin.left, xdim + margin.left])
        .padding(0.05)

    const yscale = d3.scaleLinear()
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