import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './styles/chart.css';

const Chart = ({xdim, ydim, margin, xdata, ydata}) => {

    const canvas = useRef(null)

    useEffect(() => {
        const svg = d3.select(canvas.current)

        addAxes(svg)
    }, [xdim, ydim, margin, xdata, ydata])

    const addAxes = (svg) => {
        const xscale = d3.scaleBand()
            .domain(xdata)
            .range([margin.left, xdim + margin.left])

        const xAxis = d3.axisBottom(xscale)

        svg.append('g')
            .call(xAxis)
            // .attr('transform', `translate(0, ${ydim})`)
            .attr('transform', `translate(0, ${ydim - 25})`)
    }

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