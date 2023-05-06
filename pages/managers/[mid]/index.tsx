import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import Breadcrumbs from '@/components/widgets/BreadCrumbs/BreadCrumbs';
import PrimaryButton from '@/components/widgets/Buttons/PrimaryButton/PrimaryButton';
import EmployeeDetailsCard from '@/components/widgets/Cards/EmployeeDetailsCard';
import EmployeeProdoscoreCard from '@/components/widgets/Cards/EmployeeProdoscoreCard';
import EmployeesUnderManager from '@/components/widgets/Charts/EmployeesUnderManager';
import EmployeeFilter from '@/components/widgets/Filter/EmployeeFilter/EmployeeFilter';
import employeeAjaxData from '@/mocks/employeeAjaxMock.json';
import data from '@/mocks/employeeFilterMocks/singleManagerEmplist.json';
import roleData from '@/mocks/rolesMock.json';
import { PrimaryEmployeeFilterTable } from '@/utils/constants';
import { transformEmployeesForFiltering } from '@/utils/utils';

const SignleManager = () => {
  const router = useRouter();
  const { mid } = router.query;
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex flex-col gap-3 p-[1%]">
        <div className="flex justify-between w-full">
          <Breadcrumbs rootName="Dashboard" rootHref="/dashboard" />
          <PrimaryButton variant="regular">Employee Profile</PrimaryButton>
        </div>
        <div className="flex flex-col lg:flex-row gap-3">
          <EmployeeDetailsCard
            roleData={roleData}
            self={employeeAjaxData?.employees[265910]}
          />
          <EmployeeProdoscoreCard
            score={employeeAjaxData?.employees[265910].scr}
          />
        </div>
        <EmployeesUnderManager managerName={mid?.toString()} />
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

SignleManager.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default SignleManager;
