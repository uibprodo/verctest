import { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import EmployeeDetailsCard from '@/components/widgets/Cards/EmployeeDetailsCard';
import EmployeeProdoscoreCard from '@/components/widgets/Cards/EmployeeProdoscoreCard';
import EmployeeStatisticsTab from '@/components/widgets/Employees/EmployeeTabs/EmployeeStatisticsTab';
import employeeAjaxData from '@/mocks/employeeAjaxMock.json';
import roleData from '@/mocks/rolesMock.json';

const Employee = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <div className="flex flex-col gap-3 p-[1%]">
        <div className="flex flex-col lg:flex-row gap-3">
          <EmployeeDetailsCard
            roleData={roleData}
            self={employeeAjaxData?.employees[265910]}
          />
          <EmployeeProdoscoreCard
            score={employeeAjaxData?.employees[265910].scr}
          />
        </div>
        <EmployeeStatisticsTab />
      </div>
    </div>
  );
};

Employee.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Employee;
