import { ReactNode } from 'react';

import { TrendsTableStructure } from '@/utils/types';

type TrendsTableHeaderProps = {
  tableStructure: TrendsTableStructure[];
};

export const TrendsTableHeader: React.FC<TrendsTableHeaderProps> = ({
  tableStructure,
}) => {
  return (
    <table className="bg-[white] w-full table-fixed box-border shadow-[0_2px_2px_#f5f2ef] border p-2.5 rounded-[3px] border-collapse border-solid border-[rgba(35,35,35,0.1)]">
      <thead className="border-[rgba(35,] border-[35,0.1)_solid_1px]">
        <tr className="bg-[#F9F9F9]">
          {tableStructure.map((column) =>
            column.filterValue ? (
              <th
                key={column.heading}
                className={`px-3 py-4 ${column.className} whitespace-nowrap overflow-hidden text-ellipsis border-l-[#E0E0E0] border-l border-solid`}
              >
                {column.heading}
              </th>
            ) : null
          )}
        </tr>
      </thead>
    </table>
  );
};

type TrendsTableBodyProps = {
  children: ReactNode;
};

export const TrendsTableBody: React.FC<TrendsTableBodyProps> = ({
  children,
}) => {
  return (
    <div className="clear-both mr-[-15px] h-[calc(100vh_-_275px)] w-[calc(100%_+_5px)] overflow-y-scroll styled-scrollbar">
      <table className="bg-[white] w-full table-fixed box-border shadow-[0_2px_2px_#f5f2ef] border p-2.5 rounded-[3px] border-collapse border-solid border-[rgba(35,35,35,0.1)]">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
