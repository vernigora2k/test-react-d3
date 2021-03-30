import React from 'react';
import Header from '../components/header';
import Chart from '../components/chart';
import './styles/barchart.css';

const BarChart = () => {
    const months = ['Aug 1, 2011', 'Feb 1, 2012', 'Aug 1, 2012', 'Feb 1, 2013', 'Aug 1, 2013', 'Feb 1, 2014', 'Aug 1, 2014', 'Feb 1, 2015', 'Aug 1, 2015', 'Feb 1, 2016', 'Aug 1, 2016', 'Feb 1, 2017', 'Aug 1, 2017', 'Feb 1, 2018', 'Aug 1, 2018', 'Feb 1, 2019', 'Aug 1, 2019']
    const y1values = [40, 50, 37, 70, 65, 35, 30, 39, 45, 37, 55, 67]
    const y2values = [1950, 2200, 2000, 2600, 2500, 2050, 1800, 1900, 2200, 2050, 2300, 2500]

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
                />
            </div>
        </div>
    )
}

export default BarChart;