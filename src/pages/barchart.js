import React from 'react';
import Header from '../components/header';
import Chart from '../components/chart';
import './styles/barchart.css';

const BarChart = () => {
    const months = ['jun', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'august', 'sep', 'oct', 'nov', 'dec']
    const vvls = [5, 6, 2, 7, 9, 1, 2, 3, 8, 3, 6, 7]

    return (
        <div className='barchart'>
            <Header />
            <div className='barchart-body'>
                <Chart />
            </div>
        </div>
    )
}

export default BarChart;