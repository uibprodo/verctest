import React from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [20, 10, 60, 50, 80, 75, 45],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

type Props = {
  role?: string;
};

const EmployeesByRoleChart: React.FC<Props> = ({ role }) => {
  return (
    <div className="flex flex-col card-wrap h-full">
      <h2 className="font-semibold py-2 px-5 border-b border-solid border-gray-slate-600">
        Employees in {role}
      </h2>
      <div className="p-4 h-full">
        <Bar options={options} data={data} height={350} />
      </div>
    </div>
  );
};

export default EmployeesByRoleChart;
