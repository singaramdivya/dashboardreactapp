import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import './style.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const lineData = {
        labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
        datasets: [
            {
                label: 'orders',
                data: [4, 2, 2],
                borderColor: '#FFA500', 
                borderWidth: 2,
                backgroundColor: 'rgba(255, 165, 0, 0.2)', 
                pointBackgroundColor: '#FFA500',
                pointBorderColor: '#FFA500',
                fill: false,
                yAxisID: 'y-axis-orders',
                tension: 0.4, 
            },
            {
                label: 'sales',
                data: [1.4, 0.8, 0.5], 
                borderColor: '#008080', 
                borderWidth: 2,
                backgroundColor: 'rgba(0, 128, 128, 0.2)',
                pointBackgroundColor: '#008080',
                pointBorderColor: '#008080',
                fill: false,
                yAxisID: 'y-axis-sales',
                tension: 0.4, 
            },
        ],
    };

    const lineOptions = {
        responsive: true,
        scales: {
            'y-axis-orders': {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                ticks: {
                    stepSize: 1,
                },
                grid: {
                    drawOnChartArea: false, 
                },
            },
            'y-axis-sales': {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                ticks: {
                    stepSize: 0.4,  
                    min: 0,         
                    max: 1.6,       
                    callback: function(value) { 
                        return value + 'k';
                    }
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                position: 'top',
                align: 'start',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'line',
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += label === 'sales: ' ? `${context.parsed.y}k` : context.parsed.y;
                        }
                        return label;
                    },
                },
            },
        },
    };


    const pieData = {
        labels: ['WooCommerce Store', 'Shopify Store'],
        datasets: [
            {
                label: 'Portion of Sales',
                data: [44.2, 55.8],
                backgroundColor: ['#fc8eac', '#66cdaa'],
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className="main-content">
            <h2>Dashboard</h2>
            <div className="charts">
                <div className="line-chart">
                    <Line data={lineData} options={lineOptions} />
                </div>
                <div className="pie-chart">
                    <Pie data={pieData} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
