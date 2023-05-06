import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OrganizationProdChart: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'start' as const,
      },
    },
    maintainAspectRatio: false,
  };

  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'This Period',
        data: [40, 45, 58, 32, 75, 28, 32],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Previous Period',
        data: [50, 72, 32, 80, 40, 28, 65],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="flex flex-col card-wrap h-full">
      <h2 className="font-semibold py-2 px-5 border-b border-solid border-gray-slate-600">
        Organization Prodoscore chart
      </h2>
      <div className="p-4 h-full">
        <Line options={options} data={data} height={320} />
      </div>
    </div>
  );
};

export default OrganizationProdChart;
