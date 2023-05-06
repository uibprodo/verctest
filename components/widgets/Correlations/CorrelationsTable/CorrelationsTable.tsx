import { useState } from 'react';

import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITableSummaryData } from '@/interfaces/correlations';

import CorrelationTableRow from './CorrelationTableRow';

type Props = {
  descHeading: string;
  statHeading: string;
  tableData: ITableSummaryData[];
  tableclassName?: string;
  tableBodyClassName?: string;
  tableRowClassName?: string;
  selectedRow?: string | null;
  isSortingAvailable?: boolean;
  isDeleteAvailable?: boolean;
  setSelectedRow?: (_selectedRow: string) => void;
};

type SortType = {
  category: string;
  ascending: boolean | null;
};

const CorrelationsTable: React.FC<Props> = ({
  descHeading,
  statHeading,
  tableData,
  tableclassName = '',
  tableBodyClassName = '',
  tableRowClassName = '',
  selectedRow,
  isSortingAvailable,
  isDeleteAvailable = false,
  setSelectedRow,
}) => {
  const [currentSort, setCurrentSort] = useState<SortType>({
    category: 'stat',
    ascending: null,
  });

  const sortTypes = (a: any, b: any): number => {
    if (currentSort.ascending) {
      return a[currentSort.category] == b[currentSort.category]
        ? 0
        : a[currentSort.category] > b[currentSort.category]
        ? 1
        : -1;
    } else {
      return a[currentSort.category] == b[currentSort.category]
        ? 0
        : a[currentSort.category] < b[currentSort.category]
        ? 1
        : -1;
    }
  };

  return (
    <div className={`${tableclassName}`}>
      <table
        className={`w-full font-light text-sm border border-solid text-gray-slate-1200 border-gray-slate-600 mb-5`}
      >
        <thead>
          <tr className="border-b border-solid flex justify-between w-full border-gray-slate-600">
            <th
              className="text-left py-2 px-5"
              onClick={() =>
                setCurrentSort({
                  category: 'description',
                  ascending: !currentSort.ascending,
                })
              }
            >
              <div className="flex">
                {descHeading}
                {isSortingAvailable &&
                  currentSort.category === 'description' && (
                    <FontAwesomeIcon
                      icon={currentSort.ascending ? faCaretUp : faCaretDown}
                      color="black"
                      width="15px"
                      height="15px"
                      className="mx-1 mt-1"
                    />
                  )}
              </div>
            </th>
            <th
              className="text-right py-2 px-5"
              onClick={() =>
                setCurrentSort({
                  category: 'stat',
                  ascending: !currentSort.ascending,
                })
              }
            >
              <div className="flex">
                {statHeading}
                {isSortingAvailable && currentSort.category === 'stat' && (
                  <FontAwesomeIcon
                    icon={currentSort.ascending ? faCaretUp : faCaretDown}
                    color="black"
                    width="15px"
                    height="15px"
                    className="mx-1 mt-1"
                  />
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody className={`${tableBodyClassName}`}>
          {tableData
            ?.sort((a, b) => sortTypes(a, b))
            .map((item) => (
              <CorrelationTableRow
                key={item.id}
                item={item}
                tableRowClassName={tableRowClassName}
                setSelectedRow={setSelectedRow}
                selectedRow={selectedRow}
                isDeleteAvailable={isDeleteAvailable}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CorrelationsTable;
