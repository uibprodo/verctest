import { ReactElement } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import { TabPlaceHolder, Tabs } from '@/components/widgets/Tabs/PrimaryTabs';
import TrendsCore from '@/components/widgets/Trends/TrendTabs/TrendsCore';
import { TrendType } from '@/utils/constants';

const Trends = () => {
  return (
    <div className="flex flex-col w-full gap-3">
      <Tabs
        tabContainerStyle="flex bg-white-slate-50"
        activeTabStyle="font-semibold text-black cursor-default border-b-[3px] border-solid border-primary-blue"
        inactiveTabStyle="text-black-slate-70 font-semibold"
        commonTabStyle="p-3 cursor-pointer rounded-[5px_5px_0_0] mb-[-1px]"
      >
        <TabPlaceHolder
          component={
            <TrendsCore
              tableType={TrendType.Employee}
              isFilteringAvailable={true}
              name="Employees"
            />
          }
          name="Employees"
        />
        <TabPlaceHolder
          component={
            <TrendsCore
              tableType={TrendType.RawData}
              isFilteringAvailable={true}
              name="Raw Data"
            />
          }
          name="Raw Data"
        />
        <TabPlaceHolder
          component={
            <TrendsCore
              tableType={TrendType.LoginActivity}
              name="Login Activities"
            />
          }
          name="Login Activities"
        />
        <TabPlaceHolder
          component={
            <TrendsCore
              tableType={TrendType.AdminActivity}
              name="Admin Activities"
            />
          }
          name="Admin Activities"
        />
      </Tabs>
    </div>
  );
};

Trends.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Trends;
