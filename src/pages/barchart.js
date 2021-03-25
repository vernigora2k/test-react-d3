import React from 'react';
import Header from '../components/header';
import Chart from '../components/chart';
import './styles/barchart.css';

const BarChart = () => {
    const months = ['Mar 1, 2017', 'May 1, 2017', 'Jul 1, 2017', 'Sep 1, 2017', 'Nov 1, 2017', 'Jan 1, 2018', 'Mar 1, 2018', 'May 1, 2018', 'Jul 1, 2018', 'Sep 1, 2018', 'Nov 1, 2018', 'Jan 1, 2019']
    const y1values = [40, 50, 37, 70, 65, 35, 30, 39, 45, 37, 55, 67]
    const y2values = [1950, 2200, 2000, 2600, 2500, 2050, 1800, 1900, 2200, 2050, 2300, 2500]

    const rawData = [
        {x: 10, y: 67}, {x: 15, y: 74}, {x: 20, y: 63},
        {x: 25, y: 56}, {x: 30, y: 24}, {x: 35, y: 26},
        {x: 40, y: 56}, {x: 45, y: 24}, {x: 50, y: 26},
        {x: 55, y: 16}, {x: 60, y: 24}, {x: 65, y: 26},
        {x: 65, y: 56}, {x: 70, y: 24}, {x: 75, y: 26},
        {x: 80, y: 19}, {x: 85, y: 42}, {x: 90, y: 88},
        {x: 95, y: 56}, {x: 100, y: 24}, {x: 105, y: 26},
        {x: 110, y: 67}, {x: 120, y: 74}, {x: 125, y: 63},
        {x: 130, y: 67}, {x: 135, y: 74}, {x: 140, y: 63},
        {x: 145, y: 67}, {x: 150, y: 74}, {x: 160, y: 63},
        {x: 170, y: 67}, {x: 175, y: 74}, {x: 180, y: 63},
        {x: 190, y: 67}, {x: 195, y: 74}, {x: 200, y: 63},
        {x: 210, y: 67}, {x: 215, y: 74}, {x: 220, y: 63},
        {x: 225, y: 67}, {x: 230, y: 74}, {x: 235, y: 63},
        {x: 240, y: 67}, {x: 245, y: 74}, {x: 250, y: 63},
        {x: 255, y: 67}, {x: 260, y: 74}, {x: 270, y: 63},
        {x: 130, y: 67}, {x: 135, y: 74}, {x: 140, y: 63},
        {x: 130, y: 67}, {x: 135, y: 74}, {x: 140, y: 63},
        {x: 130, y: 67}, {x: 135, y: 74}, {x: 140, y: 63},
        {x: 130, y: 67}, {x: 135, y: 74}, {x: 140, y: 63},
        {x: 130, y: 67}, {x: 135, y: 74}, {x: 140, y: 63},
    ]
    const data = [40, 50, 37, 70, 65, 50, 32, 39, 90, 1, 250, -199]
    const xdatatemp = [400, 500, 370, 700, 650, 350, 300, 390, 450, 370, 550, 670]
    const ydatatemp = [40, 50, 37, 70, 65, 35, 30, 39, 45, 37, 55, 67]

    return (
        <div className='barchart'>
            <Header />
            <div className='barchart-body'>
                <Chart 
                    xdim={1440} 
                    ydim={500} 
                    margin={{
                        top: 80,
                        left: 120,
                        right: 120,
                        bottom: 80
                    }} 
                    xdata={months}
                    ydata={y1values}
                    ydatascale={y2values}

                    rawData={rawData}
                    data={data}
                    xdatatemp={xdatatemp}
                    ydatatemp={ydatatemp}

                />
            </div>
        </div>
    )
}

export default BarChart;