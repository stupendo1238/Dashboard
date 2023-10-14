import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options={
  scales: {
    x: {
      display:true,
      grid:{display:false},
      type: 'category',
      beginAtZero: true,
    },
    y: {
      display: false,
      ticks: {
          stepSize:20,
          beginAtZero: true
      }
    },
  },
  plugins: {
    legend: {
      display:false,
     
    },
  },
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug',"Sep",'Oct','Nov','Dec'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      borderRadius: 8,
      barPercentage:0.8,
      categoryPercentage:1,
      data:[61,64,62,83,79,65,73,60,66,62,83,69],
      backgroundColor: (context) => {
        const value = context.dataset.data[context.dataIndex];
        return value ===60? '#0d63bf' : '#e1dff7';
      },
    }
  ],
};

export default function ColumnChart() {
  return <Bar options={options} data={data} />;
}
