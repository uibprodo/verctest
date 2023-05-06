import { Tabs, TabPlaceHolder } from '../../Tabs/PrimaryTabs';
import EmployeeCorrelationsTab from './EmployeeCorrelationsTab';
import EmployeeStatisticsTab from './EmployeeStatisticsTab';

const EmployeeTabs: React.FC = () => {
  return (
    <div className="flex flex-col mt-3">
      <Tabs
        tabContainerStyle="flex border-b-white border-b-8 border-b- border-solid mb-3"
        activeTabStyle="text-[#232323] font-semibold cursor-default bg-white"
        inactiveTabStyle="text-primary-blue font-semibold"
        commonTabStyle="p-2 cursor-pointer rounded-[5px_5px_0_0] mb-[-1px]"
      >
        <TabPlaceHolder
          component={<EmployeeStatisticsTab />}
          name="Statistics"
        />
        <TabPlaceHolder
          component={<EmployeeCorrelationsTab />}
          name="Correlations"
        />
      </Tabs>
    </div>
  );
};

export default EmployeeTabs;
