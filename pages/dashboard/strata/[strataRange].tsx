import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import Breadcrumbs from '@/components/widgets/BreadCrumbs/BreadCrumbs';
import EmployeesUnderScore from '@/components/widgets/Charts/EmployeesUnderScore';
import MyEmployees from '@/components/widgets/Employees/MyEmployees/MyEmployees';
import { IEmployeeList } from '@/interfaces/employees';
import data from '@/mocks/employeeFilterMocks/workPlaceProductivityDashboardList.json';

const Strata = () => {
  const router = useRouter();
  const { strataRange } = router.query;
  const getEmployeesFromStrataRange = (
    strataRange?: string,
    employeesList?: IEmployeeList
  ) => {
    if (strataRange === undefined || employeesList === undefined) return [];
    return Object.values(employeesList)?.filter((employee) => {
      if (employee?.scr?.l !== undefined) {
        if (strataRange === 'above' && Math.trunc(employee.scr.l) >= 75) {
          return employee;
        }
        if (
          strataRange === 'within' &&
          Math.trunc(employee.scr.l) >= 40 &&
          Math.trunc(employee.scr.l) <= 74
        ) {
          return employee;
        }
        if (strataRange === 'below' && Math.trunc(employee.scr.l) <= 39) {
          return employee;
        }
      }
    });
  };

  return (
    <div className="flex flex-col gap-3 p-[1%]">
      <Breadcrumbs rootName="Dashboard" rootHref="/dashboard" />
      <EmployeesUnderScore
        heading={`Employees with a ${strataRange} average Prodoscore`}
      />
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full">
          <MyEmployees
            heading={`${strataRange} average employee details`}
            employees={getEmployeesFromStrataRange(
              strataRange?.toString(),
              data.employees
            )}
          />
        </div>
      </div>
    </div>
  );
};
Strata.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Strata;
