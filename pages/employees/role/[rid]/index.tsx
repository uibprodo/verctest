import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import Breadcrumbs from '@/components/widgets/BreadCrumbs/BreadCrumbs';
import EmployeesByRoleChart from '@/components/widgets/Charts/EmployeesByRoleChart';
import EmployeeFilter from '@/components/widgets/Filter/EmployeeFilter/EmployeeFilter';
import data from '@/mocks/employeeFilterMocks/emplyeeRolesEmpList.json';
import roleData from '@/mocks/rolesMock.json';
import { EmployeeFilterTableWithCorrelations } from '@/utils/constants';
import { transformEmployeesForFiltering } from '@/utils/utils';

const EmployeeByRole = () => {
  const router = useRouter();
  const { rid } = router.query;
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex flex-col gap-3 p-[1%]">
        <div className="flex justify-between w-full">
          <Breadcrumbs rootName="Dashboard" rootHref="/dashboard" />
        </div>
        <EmployeesByRoleChart role={rid?.toString()} />
      </div>
      <EmployeeFilter
        isCorrelationsVisible={true}
        filterTableStructure={EmployeeFilterTableWithCorrelations}
        employeeFilterData={transformEmployeesForFiltering(
          data.employees,
          roleData
        )}
      />
    </div>
  );
};

EmployeeByRole.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default EmployeeByRole;
