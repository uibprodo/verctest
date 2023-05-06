import { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import EmployeeDetailsCard from '@/components/widgets/Cards/EmployeeDetailsCard';
import EmployeeProdoscoreCard from '@/components/widgets/Cards/EmployeeProdoscoreCard';
import EmployeeTabs from '@/components/widgets/Employees/EmployeeTabs/EmployeeTabs';
import employeeAjaxData from '@/mocks/employeeAjaxMock.json';
import roleData from '@/mocks/rolesMock.json';

const MyProdoscore = () => {
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
        <EmployeeTabs />
      </div>
    </div>
  );
};

MyProdoscore.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default MyProdoscore;
