import React, { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import Breadcrumbs from '@/components/widgets/BreadCrumbs/BreadCrumbs';
import EmployeeFilter from '@/components/widgets/Filter/EmployeeFilter/EmployeeFilter';
import data from '@/mocks/employeeFilterMocks/employeesEmplist.json';
import roleData from '@/mocks/rolesMock.json';
import { PrimaryEmployeeFilterTable } from '@/utils/constants';
import { transformEmployeesForFiltering } from '@/utils/utils';

const Employees = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-3 p-[1%]">
        <div className="flex justify-between w-full">
          <Breadcrumbs rootName="Dashboard" rootHref="/dashboard" />
        </div>
      </div>
      <EmployeeFilter
        isCorrelationsVisible={false}
        filterTableStructure={PrimaryEmployeeFilterTable}
        employeeFilterData={transformEmployeesForFiltering(
          data.employees,
          roleData
        )}
      />
    </div>
  );
};

Employees.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Employees;
