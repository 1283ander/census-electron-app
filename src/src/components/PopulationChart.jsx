import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import { colors } from '../designTokens';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const PopulationChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetch('data/census-data.json')
      .then((response) => response.json())
      .then((data) => {
        const states = data.map(item => item.state);
        const populations = data.map(item => item.population);

        setChartData({
          labels: states,
          datasets: [
            {
              label: 'Population',
              data: populations,
              backgroundColor: colors.primary,
            },
          ],
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: colors.text,
        },
      },
      title: {
        display: true,
        text: 'State Populations',
        color: colors.text,
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: colors.text,
        },
        grid: {
          color: colors.lightGray,
        },
      },
      x: {
        ticks: {
          color: colors.text,
        },
        grid: {
          color: colors.lightGray,
        },
      },
    },
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default PopulationChart;
