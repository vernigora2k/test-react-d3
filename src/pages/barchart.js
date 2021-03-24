import React from 'react';
import Header from '../components/header';
import Chart from '../components/chart';
import './styles/barchart.css';

const BarChart = () => {
    const months = ['mar', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec']
    const yvalues = [5, 6, 2, 7, 9, 1, 2, 3, 8, 3, 6, 7]

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
                    ydata={yvalues}

                />
            </div>
        </div>
    )
}

export default BarChart;