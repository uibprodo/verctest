import { ReactElement, useMemo, useState } from 'react';

import DashboardLayout from '@/components/layouts/DashboardLayout';
import CorrelationsTable from '@/components/widgets/Correlations/CorrelationsTable/CorrelationsTable';
import CorrelationsFilterDropDown from '@/components/widgets/DropDowns/CorrelationsFilterDropDown';
import TextboxWithSuggestions from '@/components/widgets/TextInputs/TextboxWithSuggestions';
import data from '@/mocks/correlationsMock.json';
import { Topics, Directions, NoOfRecords } from '@/utils/constants';
import { CorrelationFilterItem } from '@/utils/types';
import { formatCorrelationData } from '@/utils/utils';

const Correlations = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [topics, setTopics] = useState<CorrelationFilterItem[]>(Topics);
  const [directions, setDirections] =
    useState<CorrelationFilterItem[]>(Directions);
  const [noOfRecords, setNoOfRecords] =
    useState<CorrelationFilterItem[]>(NoOfRecords);
  const [selectedRow, setSelectedRow] = useState<string | null>('');
  const arr = [
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
  ];
  const filterdData = useMemo(() => {
    return arr.filter((topic) =>
      topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="flex flex-col gap-3">
      <div className="w-full flex bg-gray-slate-500 shadow-[inset_0_3px_3px_#e5e5e5,inset_0_-2px_3px_#e5e5e5] m-0 p-[1%] gap-2">
        <TextboxWithSuggestions
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          suggestions={filterdData}
        />
        <CorrelationsFilterDropDown
          filterItems={topics}
          setFilterItems={setTopics}
          heading="Topic Types"
        />
        <CorrelationsFilterDropDown
          filterItems={directions}
          setFilterItems={setDirections}
          heading="Directions"
          isLeastOneShouldBeSelected={true}
        />
        <CorrelationsFilterDropDown
          filterItems={noOfRecords}
          setFilterItems={setNoOfRecords}
          heading="Number of Records"
          isCanSelectOnlyOne={true}
        />
      </div>
      <div className="flex flex-col min-[1100px]:flex-row gap-3 p-[1%]">
        <div className="w-full min-[1100px]:w-1/2">
          <CorrelationsTable
            descHeading="Topic"
            statHeading="Mentions"
            tableData={formatCorrelationData(data)?.topic}
            tableclassName="bg-white table-fixed border-collapse"
            tableBodyClassName="h-[calc(80vh_-_223px)] overflow-x-hidden overflow-y-scroll max-h-[69vh] flex flex-col w-full styled-scrollbar"
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            tableRowClassName="py-1"
            isSortingAvailable={true}
            isDeleteAvailable={true}
          />
        </div>
        <div className="w-full min-[1100px]:w-1/2">
          <CorrelationsTable
            descHeading="COO"
            statHeading="Interactions"
            tableData={formatCorrelationData(data)?.coo}
            tableclassName="bg-white table-fixed border-collapse"
            tableBodyClassName="h-[calc(80vh_-_223px)] overflow-x-hidden overflow-y-scroll max-h-[69vh] flex flex-col w-full styled-scrollbar"
            selectedRow={selectedRow}
            setSelectedRow={setSelectedRow}
            tableRowClassName="py-1"
            isSortingAvailable={true}
            isDeleteAvailable={true}
          />
        </div>
      </div>
    </div>
  );
};
Correlations.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
export default Correlations;
