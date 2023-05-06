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
import annotationPlugin from 'chartjs-plugin-annotation';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

type annotationValues = {
  xMin: number;
  xMax: number;
};

type Props = {
  annotationValues: annotationValues;
};

const EmployeePerformanceChart: React.FC<Props> = () => {
  const labels = [
    '01:20',
    '01:30',
    '01:40',
    '01:50',
    '02:00',
    '02:10',
    '02:20',
    '02:30',
    '02:40',
    '02:50',
    '03:00',
    '03:10',
    '03:20',
    '03:30',
    '03:40',
    '03:50',
    '04:00',
    '04:10',
    '04:20',
    '04:30',
    '04:40',
    '04:50',
    '05:00',
    '05:10',
    '05:20',
    '05:30',
    '05:40',
    '05:50',
    '06:00',
    '06:10',
    '06:20',
    '06:30',
    '06:40',
    '06:50',
    '07:00',
    '07:10',
    '07:20',
    '07:30',
    '07:40',
    '07:50',
    '08:00',
    '08:10',
    '08:20',
    '08:30',
    '08:40',
    '08:50',
    '09:00',
    '09:10',
    '09:20',
    '09:30',
    '09:40',
    '09:50',
    '10:00',
    '10:10',
    '10:20',
    '10:30',
    '10:40',
    '10:50',
    '11:00',
    '11:10',
    '11:20',
    '11:30',
    '11:40',
    '11:50',
    '12:00',
    '12:10',
    '12:20',
    '12:30',
    '12:40',
    '12:50',
    '13:00',
    '13:10',
    '13:20',
    '13:30',
    '13:40',
    '13:50',
    '14:00',
    '14:10',
    '14:20',
    '14:30',
    '14:40',
    '14:50',
    '15:00',
    '15:10',
    '15:20',
    '15:30',
    '15:40',
    '15:50',
    '16:00',
    '16:10',
    '16:20',
    '16:30',
    '16:40',
    '16:50',
    '17:00',
    '17:10',
    '17:20',
    '17:30',
    '17:40',
    '17:50',
    '18:00',
    '18:10',
    '18:20',
    '18:30',
  ];
  const data = {
    labels,
    datasets: [
      {
        label: 'This Period',
        data: [
          0, 0, 0, 4, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3,
          3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3,
          3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        align: 'start' as const,
      },
      annotation: {
        annotations: {
          box1: {
            type: 'box',
            xMin: 0,
            xMax: 10,
            yMin: 0,
            yMax: '100%',
            backgroundColor: 'rgba(255, 99, 132, 0.25)',
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col card-wrap h-full">
      <h2 className="font-semibold py-2 px-5 border-b border-solid border-gray-slate-600">
        Performance throughout the day (Los Angeles)
      </h2>
      <div className="p-4 h-full">
        <Line 
        //@ts-ignore
        options={options} 
        data={data} 
        height={320} />
      </div>
    </div>
  );
};

export default EmployeePerformanceChart;
