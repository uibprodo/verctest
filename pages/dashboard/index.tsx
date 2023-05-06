import { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import OrganizationProdChart from '@/components/widgets/Charts/OrganizationProdChart';
import ProdoscpreDistributionHistogram from '@/components/widgets/Charts/ProdoscpreDistributionHistogram';
import Correlations from '@/components/widgets/Correlations/CorrelationsTabs/CorrelationsTabs';
import MyEmployees from '@/components/widgets/Employees/MyEmployees/MyEmployees';
import ScoreStatus from '@/components/widgets/ScoreStatus/ScoreStatus';
import ScoreSummary from '@/components/widgets/ScoreSummary/ScoreSummary';
import data from '@/mocks/employeeFilterMocks/workPlaceProductivityDashboardList.json';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3 w-full p-[1%]">
      <div className="flex flex-col card-wrap box-wrap">
        <ScoreStatus score={50} percentage={70} />
        <div className="flex gap-2 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3">
            <ScoreSummary
              backgroundColor="bg-blue-100"
              borderColor="border-primary-blue"
              averageRange="above"
              employeeCount={10}
              change={20}
              changeDifference="No change"
              scoreRange="above 75"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <ScoreSummary
              backgroundColor="bg-gray-slate-700"
              borderColor="border-primary-gray"
              averageRange="within"
              employeeCount={450}
              change={80}
              changeDifference="Increase"
              scoreRange="between 40 ~ 75"
            />
          </div>
          <div className="w-full lg:w-1/3">
            <ScoreSummary
              backgroundColor="bg-red-200"
              borderColor="border-primary-red"
              averageRange="below"
              employeeCount={1000}
              change={150}
              changeDifference="Decrease"
              scoreRange="below 40"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-3">
        <div className="w-full lg:w-1/2 1xl:w-4/12 flex flex-col gap-3">
          <Correlations />
          <MyEmployees employees={data.employees} />
        </div>
        <div className="w-full lg:w-1/2 1xl:w-8/12 flex flex-col gap-3">
          <OrganizationProdChart />
          <ProdoscpreDistributionHistogram />
        </div>
      </div>
    </div>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Dashboard;
