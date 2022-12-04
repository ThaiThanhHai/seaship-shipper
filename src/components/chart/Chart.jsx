import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['thất bại', 'đang giao', 'đã giao'],
  datasets: [
    {
      label: 'Đơn hàng',
      data: [5, 3, 20],
      backgroundColor: [
        '#FF0033',
        '#33FFFF',
        '#33CC99',
      ],
      borderColor: [
        '#FF0033',
        '#33FFFF',
        '#33CC99',
      ],
      borderWidth: 1,
    },
  ],
};


const Chart = () => {
  return <Pie data={data}/>;
}

export default Chart;
