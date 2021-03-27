import React from 'react';
import Header from '../components/header';
import Chart from '../components/chart';
import './styles/barchart.css';

const BarChart = () => {
    const months = ['Mar 1, 2017', 'May 1, 2017', 'Jul 1, 2017', 'Sep 1, 2017', 'Nov 1, 2017', 'Jan 1, 2018', 'Mar 1, 2018', 'May 1, 2018', 'Jul 1, 2018', 'Sep 1, 2018', 'Nov 1, 2018', 'Jan 1, 2019']
    const y1values = [40, 50, 37, 70, 65, 35, 30, 39, 45, 37, 55, 67]
    const y2values = [1950, 2200, 2000, 2600, 2500, 2050, 1800, 1900, 2200, 2050, 2300, 2500]
    const greenPeriods = [{x: 150, w: 30},{x: 250, w: 30}, {x: 700, w: 150}, {x: 990, w: 90}]
    const redPeriods = [{x: 300, w: 30}, {x: 450, w: 100}, {x: 590, w: 30}]

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
                    greenPeriods={greenPeriods}
                    redPeriods={redPeriods}
                />
            </div>
        </div>
    )
}

export default BarChart;