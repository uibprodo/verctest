import { IEmp, IProd } from '@/interfaces/correlations';
import { CorrelationEntityItem } from '@/utils/types';

type Props = {
  entityTableType: CorrelationEntityItem[];
  entityData?: IEmp[] | IProd[];
};

const CorrelationsEntityTable: React.FC<Props> = ({
  entityTableType,
  entityData,
}) => {
  return (
    <table
      id="prodUsage"
      className="bg-[white] w-full box-border shadow-[0_2px_2px_#f5f2ef] border p-2.5 rounded-[3px] border-collapse border-solid border-[rgba(35,35,35,0.1)]"
    >
      <thead className="border-b border-solid border-gray-slate-600">
        <tr className="table-title border-b border-solid border-gray-slate-600">
          <th colSpan={4} className="text-center py-3 px-4">
            Product usage
          </th>
        </tr>
        <tr className="border-b border-solid border-gray-slate-600">
          {entityTableType.map((item, index) =>
            index !== 0 ? (
              <th
                colSpan={item.colSpan}
                key={item.heading}
                className={item.className}
              >
                {item.heading}
              </th>
            ) : null
          )}
        </tr>
      </thead>
      <tbody>
        {entityData?.map((item, index) => (
          <tr
            key={index}
            className="border-b border-solid border-gray-slate-600 py-3 px-4"
          >
            {entityTableType.map((entity, index) =>
              index === 0 ? (
                <td className={entity.className} key={entity.heading + index}>
                  <div
                    className={`icon-${
                      item[entity.colItem as keyof typeof item]
                    } inline-block h-6 w-6 ml-0 -mr-1 -mt-2.5 -mb-2 bg-[auto_100%]`}
                  ></div>
                </td>
              ) : (
                <td className={entity.className} key={entity.heading + index}>
                  {item[entity.colItem as keyof typeof item]}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CorrelationsEntityTable;
