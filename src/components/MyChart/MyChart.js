import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './MyChart.css';

const MyChart = () => {
    const [lineChart, setLineChart] = useState([]);
    useEffect(() => {
        fetch('chartdb.json')
            .then(res => res.json())
            .then(data => setLineChart(data));
    }, [])

    return (
        <div className='my-chart'>
            <div>
                <LineChart width={400} height={400} data={lineChart}>
                    <Line dataKey={'sell'}></Line>
                    <XAxis dataKey={'month'} />
                    <YAxis></YAxis>
                    <CartesianGrid></CartesianGrid>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <BarChart width={400} height={400} data={lineChart}>
                    <Bar dataKey={'revenue'} fill="#8884d8"></Bar>
                    <XAxis dataKey={'investment'} />
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </div>
        </div>
    );
};

export default MyChart;