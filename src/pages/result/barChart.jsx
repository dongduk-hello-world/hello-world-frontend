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

const labels = ['0~10', '11~20', '21~30', '31~40', '41~50'];

export const data = {
  labels,
  datasets: [
    {
      label: '학생 수',
      data: [4, 8, 12, 15, 9],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export function BarChart() {
  return <Bar data={data} />;
}