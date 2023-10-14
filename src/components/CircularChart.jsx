import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Old Customers(%)","New Customers(%)","Remaining(%)"],
  datasets: [
    {
      data: [15,50,35],
      backgroundColor: [
        '#be0e75',
        '#4549c4',
        '#e1dff7',
      ],
      borderColor: [
        '#be0e75',
        '#4549c4',
        '#e1dff7',
      ],
      borderWidth:[18,10,0],
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
};

export default function CircularChart() {
  return <Doughnut data={data} options={options} />;
}