import { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import Breadcrumbs from '@/components/widgets/BreadCrumbs/BreadCrumbs';
import EmployeeFilter from '@/components/widgets/Filter/EmployeeFilter/EmployeeFilter';
import data from '@/mocks/employeeFilterMocks/enterpriseEmpList.json';
import roleData from '@/mocks/rolesMock.json';
import { EmployeeFilterEnterprise } from '@/utils/constants';
import { transformEmployeesForFiltering } from '@/utils/utils';

const Enterprise = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-3 p-[1%]">
        <div className="flex justify-between w-full">
          <Breadcrumbs rootName="Dashboard" rootHref="/dashboard" />
        </div>
      </div>
      <EmployeeFilter
        isCorrelationsVisible={false}
        filterTableStructure={EmployeeFilterEnterprise}
        employeeFilterData={transformEmployeesForFiltering(
          data.employees,
          roleData
        )}
      />
    </div>
  );
};

Enterprise.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Enterprise;
