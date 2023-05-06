import { CooData, TopicsData } from '@/mocks/mock';

import { TabPlaceHolder, Tabs } from '../../Tabs/PrimaryTabs';
import CorrelationsTable from '../CorrelationsTable/CorrelationsTable';

type Props = {
  topicStatHeading?: string;
  cooStatHeading?: string;
};

const Correlations: React.FC<Props> = ({
  topicStatHeading = 'Mentions',
  cooStatHeading = 'Interactions',
}) => {
  return (
    <div className="flex flex-col card-wrap">
      <h2 className="font-semibold py-2 px-5">Correlations</h2>
      <Tabs
        tabContainerStyle="flex bg-pink-500 border-gray-slate-600 border-b border-solid mx-5 mb-3"
        activeTabStyle="text-[#232323] border cursor-default border-solid border-gray-slate-600 border-b-transparent bg-white"
        inactiveTabStyle="text-primary-blue"
        commonTabStyle="p-2 cursor-pointer rounded-[5px_5px_0_0] mb-[-1px]"
      >
        <TabPlaceHolder
          component={
            <CorrelationsTable
              descHeading="Topic"
              statHeading={topicStatHeading}
              tableData={TopicsData}
            />
          }
          name="Topics"
        />
        <TabPlaceHolder
          component={
            <CorrelationsTable
              descHeading="COO"
              statHeading={cooStatHeading}
              tableData={CooData}
            />
          }
          name="COO"
        />
      </Tabs>
    </div>
  );
};

export default Correlations;
