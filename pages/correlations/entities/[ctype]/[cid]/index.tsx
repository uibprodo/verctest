import { ReactElement } from 'react';

import { useRouter } from 'next/router';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import Breadcrumbs from '@/components/widgets/BreadCrumbs/BreadCrumbs';
import CorrelationsEntitySummaryCard from '@/components/widgets/Cards/CorrelationsEntitySummaryCard';
import CorrelationsStatSummaryCard from '@/components/widgets/Cards/CorrelationsStatSummaryCard';
import CorrelationsEntityTrendsChart from '@/components/widgets/Charts/CorrelationsEntityTrendsChart';
import CorrelationsEntityTable from '@/components/widgets/Correlations/CorrelationsEntityTable/CorrelationsEntityTable';
import CorrelationsInstanceTable from '@/components/widgets/Correlations/CorrelationsInstanceTable/CorrelationsInstanceTable';
import data from '@/mocks/correlationsAggrMock.json';
import { CorrelationEmployees, CorrelationProducts } from '@/utils/constants';

const CorrelationsEntity = () => {
  const router = useRouter();
  const { ctype } = router.query;

  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex flex-col gap-3 p-[1%]">
        <div className="flex justify-between w-full">
          <Breadcrumbs rootName="Dashboard" rootHref="/dashboard" />
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <CorrelationsEntitySummaryCard
            entityType={ctype ? ctype.toString() : ''}
          />
          <CorrelationsStatSummaryCard />
        </div>
        <CorrelationsEntityTrendsChart />
        <div className="flex flex-col lg:flex-row w-full gap-3">
          <div className="w-full lg:w-1/2">
            <CorrelationsEntityTable
              entityData={data.emp}
              entityTableType={CorrelationEmployees}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <CorrelationsEntityTable
              entityData={data.prod}
              entityTableType={CorrelationProducts}
            />
          </div>
        </div>
        <CorrelationsInstanceTable
          isEmployeeVisible={true}
          isExpandable={true}
        />
      </div>
    </div>
  );
};

CorrelationsEntity.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default CorrelationsEntity;
