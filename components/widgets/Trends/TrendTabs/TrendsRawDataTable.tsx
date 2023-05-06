import data from '@/mocks/rawDataTrendsMock.json';
import { TrendsTableStructure } from '@/utils/types';

type Props = {
  tableStructure: TrendsTableStructure[];
};

const TrendsRawDataTable: React.FC<Props> = ({ tableStructure }) => {
  return (
    <>
      {data?.raw_data?.map((row, index) => (
        <tr
          key={`row-${index}`}
          className="border-b-[#E0E0E0] border-b border-solid text-sm hover:bg-blue-300"
        >
          {tableStructure.map((column, index) =>
            column.filterValue ? (
              <td
                key={column.heading}
                className={`py-2 px-4 ${column.className} whitespace-nowrap overflow-hidden text-ellipsis font-light border-l-[#E0E0E0] border-l border-solid`}
              >
                {row[index]}
              </td>
            ) : null
          )}
        </tr>
      ))}
    </>
  );
};

export default TrendsRawDataTable;
