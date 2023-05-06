import { useState } from 'react';

import data from '@/mocks/correlationsMock.json';
import { formatCorrelationData } from '@/utils/utils';

import CorrelationsInstanceTable from '../../Correlations/CorrelationsInstanceTable/CorrelationsInstanceTable';
import CorrelationsTable from '../../Correlations/CorrelationsTable/CorrelationsTable';

const EmployeeCorrelationsTab = () => {
  const [selectedRow, setSelectedRow] = useState<string | null>('');
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col min-[1100px]:flex-row gap-3">
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
          />
        </div>
      </div>
      <CorrelationsInstanceTable />
    </div>
  );
};

export default EmployeeCorrelationsTab;
