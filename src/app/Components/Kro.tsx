"use client";
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Kro = () => {
  const [loading, setLoading] = useState<boolean>(false);

  // Static mock data for the chart
  const chartData = {
    labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'],
    datasets: [
      {
        label: 'Bitcoin Price (USD)',
        data: [30000, 30500, 31000, 32000, 31500, 32500, 33000], // Mock data
        borderColor: '#34D399', // Tailwind Green
        backgroundColor: 'rgba(52, 211, 153, 0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-white mb-6"> Crypto Trading Graph</h1>
        {loading ? (
          <div className="text-white text-xl">Loading data...</div>
        ) : (
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                title: {
                  display: true,
                  text: 'Bitcoin Price (USD)',
                  color: '#fff',
                  font: { size: 18 },
                },
                tooltip: {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  titleColor: '#fff',
                  bodyColor: '#fff',
                  borderColor: '#34D399',
                  borderWidth: 1,
                },
              },
              scales: {
                x: {
                  ticks: { color: '#fff' },
                  grid: { color: 'rgba(255, 255, 255, 0.1)' },
                },
                y: {
                  ticks: { color: '#fff' },
                  grid: { color: 'rgba(255, 255, 255, 0.1)' },
                },
              },
            }}
          />
        )}
        <div className="text-white text-lg mt-6">
          Stay ahead of the market with real-time insights powered by AI.
        </div>
      </div>
    </div>
  );
};

export default Kro;
