import React, { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import Breadcrumbs from '@/components/widgets/BreadCrumbs/BreadCrumbs';
import ManagersProdoscore from '@/components/widgets/Charts/ManagersProdoscore';
import ListTable from '@/components/widgets/Managers/SubOrdinateListTable';
import {
  aboveAverageManagers,
  averageManagers,
  belowAverageManagers,
} from '@/mocks/mock';

const Managers = () => {
  return (
    <div className="flex flex-col gap-3 p-[1%]">
      <Breadcrumbs rootName="Dashboard" rootHref="/dashboard" />
      <ManagersProdoscore />
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full md:w-1/3">
          <ListTable
            heading="Above Average"
            empolyeesData={aboveAverageManagers}
          />
        </div>
        <div className="w-full md:w-1/3">
          <ListTable heading="Average" empolyeesData={averageManagers} />
        </div>
        <div className="w-full md:w-1/3">
          <ListTable
            heading="Below Average"
            empolyeesData={belowAverageManagers}
          />
        </div>
      </div>
    </div>
  );
};
Managers.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Managers;
