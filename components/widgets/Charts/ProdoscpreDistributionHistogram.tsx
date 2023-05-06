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
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
  },
  maintainAspectRatio: false,
};

const labels = [
  '0 - 5',
  '5 - 10',
  '10 - 15',
  '15 - 20',
  '20 - 25',
  '25 - 30',
  '30 - 35',
  '35 - 40',
  '40 - 45',
  '45 - 50',
  '50 - 55',
  '55 - 60',
  '60 - 65',
  '65 - 70',
  '70 - 75',
  '75 - 80',
  '80 - 85',
  '85 - 90',
  '90 - 95',
  '95 - 100',
];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [2, 5, 8, 3, 4, 10, 7, 2, 5, 8, 3, 4, 1, 7, 2, 5, 8, 3, 4, 2],
      backgroundColor: (ctx:any) => {
        if (ctx.dataIndex <= 7) {
          return 'red';
        }

        if (ctx.dataIndex <= 14) {
          return 'black';
        }
        return 'green';
      },
      borderWidth: 0.2,
      barPercentage: 1,
      categoryPercentage: 1,
      hoverBackgroundColor: 'darkgray',
      barThickness: 'flex',
    },
  ],
};

const ProdoscpreDistributionHistogram: React.FC = () => {
  return (
    <div className="flex flex-col card-wrap h-full">
      <h2 className="font-semibold py-2 px-5 border-b border-solid border-gray-slate-600">
        {'Prodoscore distribution (histogram)'}
      </h2>
      <div className="p-4">
        <Bar 
        options={options}
        //@ts-ignore 
        data={data} 
        height={320} />
      </div>
    </div>
  );
};

export default ProdoscpreDistributionHistogram;
