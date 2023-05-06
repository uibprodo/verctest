import React, { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import Breadcrumbs from '@/components/widgets/BreadCrumbs/BreadCrumbs';
import WorkPlaceSummaryCard from '@/components/widgets/Cards/WorkPlaceSummaryCard';
import WorkPlaceProductivityChart from '@/components/widgets/Charts/WorkPlaceProductivityChart';
import EmployeeFilter from '@/components/widgets/Filter/EmployeeFilter/EmployeeFilter';
import data from '@/mocks/employeeFilterMocks/workPlaceProductivityDashboardList.json';
import roleData from '@/mocks/rolesMock.json';
import { EmployeeFilterWorkPlaceProductivity } from '@/utils/constants';
import { transformEmployeesForFiltering } from '@/utils/utils';

import OfficeIcon from '../../public/img/other/icon-organization.png';
import RemoteIcon from '../../public/img/other/icon-remote.png';

const WorkPlaceProductivity = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex flex-col gap-3 p-[1%]">
        <div className="flex justify-between w-full">
          <Breadcrumbs rootName="Dashboard" rootHref="/dashboard" />
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex flex-col w-full lg:w-3/12 gap-3">
            <WorkPlaceSummaryCard
              score={23}
              topic="In Office"
              icon={OfficeIcon}
              percentage={50}
              bgColor="bg-blue-400"
              borderColor="border-blue-500"
            />
            <WorkPlaceSummaryCard
              score={77}
              topic="Remote"
              icon={RemoteIcon}
              percentage={75}
              bgColor="bg-green-100"
              borderColor="border-green-200"
            />
          </div>
          <div className="flex w-full lg:w-9/12">
            <WorkPlaceProductivityChart />
          </div>
        </div>
      </div>
      <EmployeeFilter
        isCorrelationsVisible={false}
        filterTableStructure={EmployeeFilterWorkPlaceProductivity}
        employeeFilterData={transformEmployeesForFiltering(
          data.employees,
          roleData
        )}
      />
    </div>
  );
};

WorkPlaceProductivity.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default WorkPlaceProductivity;
