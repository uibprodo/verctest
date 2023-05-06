import { useState } from 'react';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ITableSummaryData } from '@/interfaces/correlations';
import { getIcon } from '@/utils/utils';

type props = {
  item?: ITableSummaryData;
  tableRowClassName?: string;
  selectedRow?: string | null;
  isDeleteAvailable: boolean;
  setSelectedRow?: (_selectedRow: string) => void;
};

const CorrelationTableRow: React.FC<props> = ({
  item,
  tableRowClassName,
  setSelectedRow,
  selectedRow,
  isDeleteAvailable,
}) => {
  const { icon, backgroundColor } = getIcon(item?.icon!!);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <tr
      onClick={() => setSelectedRow && setSelectedRow(item!!.id)}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer flex justify-between transition-all duration-300 ease-[ease]
     hover:bg-gray-slate-800 border-b border-solid border-gray-slate-600 ${tableRowClassName} ${
        item?.id === selectedRow ? 'bg-blue-300' : 'white'
      }`}
    >
      <td className="py-2 px-5 flex gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
        {item?.icon && (
          <div
            className={`flex justify-center items-center w-6 h-6 rounded-full`}
            style={{ backgroundColor: backgroundColor }}
          >
            <FontAwesomeIcon
              icon={icon}
              color="white"
              width="15px"
              height="15px"
            />
          </div>
        )}
        <span className="overflow-hidden text-ellipsis flex items-center">
          {item?.description}
        </span>
      </td>
      <td className="py-2 px-5 flex whitespace-nowrap overflow-hidden text-ellipsis text-right gap-2">
        {item?.stat}
        {isDeleteAvailable && (
          <FontAwesomeIcon
            icon={faTimes}
            color="red"
            width="20px"
            height="20px"
            className={`${
              isDeleteAvailable && isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => console.log('clicked')}
          />
        )}
      </td>
    </tr>
  );
};

export default CorrelationTableRow;
