import data from '@/mocks/loginActivityTrendsMock.json';
import { TrendsTableStructure } from '@/utils/types';

type Props = {
  tableStructure: TrendsTableStructure[];
};

const TrendsLoginActivityTable: React.FC<Props> = ({ tableStructure }) => {
  return (
    <>
      {data?.map((row, index) => (
        <tr
          key={`row-${index}`}
          className="border-b-[#E0E0E0] border-b border-solid text-sm hover:bg-blue-300"
        >
          {tableStructure.map((column) =>
            column.filterValue ? (
              <td
                key={column.heading}
                className={`py-2 px-4 ${column.className} whitespace-nowrap overflow-hidden text-ellipsis font-light border-l-[#E0E0E0] border-l border-solid`}
              >
                {column.colItem === 'logged_time'
                  ? new Date(row.logged_time).toUTCString()
                  : row[column.colItem as keyof typeof row]}
              </td>
            ) : null
          )}
        </tr>
      ))}
    </>
  );
};

export default TrendsLoginActivityTable;
