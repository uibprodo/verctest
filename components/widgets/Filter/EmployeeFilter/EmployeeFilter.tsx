import React, { useMemo, useState } from 'react';

import { EmployeeFilterTable, TransformedEmployees } from '@/utils/types';

import Correlations from '../../Correlations/CorrelationsTabs/CorrelationsTabs';
import EmployeeFilterTableRow from './EmployeeFilterTableRow';
import FilterInputs from './FilterInputs';
import TableHeader from './TableHeader';

type Props = {
  isCorrelationsVisible: boolean;
  filterTableStructure: EmployeeFilterTable[];
  employeeFilterData?: TransformedEmployees[];
};

type SortType = {
  category: string;
  ascending: boolean;
};

const EmployeeFilter: React.FC<Props> = ({
  isCorrelationsVisible,
  filterTableStructure,
  employeeFilterData,
}) => {
  const [searchName, setSearchName] = useState<string>('');
  const [currentSort, setCurrentSort] = useState<SortType>({
    category: 'name',
    ascending: true,
  });

  const filterdData = useMemo(() => {
    return employeeFilterData?.filter((employee) =>
      employee.employeeName.toLowerCase().includes(searchName.toLowerCase())
    );
  }, [searchName]);

  const sortTypes = (a: any, b: any): number => {
    if (currentSort.ascending) {
      return a[currentSort.category] == b[currentSort.category]
        ? 0
        : a[currentSort.category] > b[currentSort.category]
        ? 1
        : -1;
    }
    return a[currentSort.category] == b[currentSort.category]
      ? 0
      : a[currentSort.category] < b[currentSort.category]
      ? 1
      : -1;
  };

  return (
    <>
      <FilterInputs searchName={searchName} setSearchName={setSearchName} />
      <div className={`flex flex-col lg:flex-row gap-2 p-[1%]`}>
        {isCorrelationsVisible && (
          <div className="w-full lg:w-1/2 1xl:w-1/3">
            <Correlations
              topicStatHeading="Significance"
              cooStatHeading="Significance"
            />
          </div>
        )}
        <div
          className={`${
            isCorrelationsVisible ? 'w-full lg:w-1/2 1xl:w-2/3' : 'w-full'
          }`}
        >
          <table className="w-full bg-white h-auto">
            <TableHeader
              currentSort={currentSort}
              setCurrentSort={setCurrentSort}
              filterTableStructure={filterTableStructure}
            />
            <tbody>
              {filterdData && filterdData.length > 0 ? (
                filterdData
                  .sort((a, b) => sortTypes(a, b))
                  .map((employee) => (
                    <EmployeeFilterTableRow
                      key={employee.employeeId}
                      employee={employee}
                      filterTableStructure={filterTableStructure}
                    />
                  ))
              ) : (
                <td colSpan={5} className="w-full py-3 px-4 italic text-center">
                  No records found
                </td>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default EmployeeFilter;
