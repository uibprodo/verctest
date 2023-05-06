import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ICorrelationsInstance } from '@/interfaces/correlations';
import eventDrillDownData from '@/mocks/eventsMock.json';
import { mtsToHrs, sentimentWidget } from '@/utils/utils';

import ScoreDrillDownExpandedDetail from '../../ScoreDrillDown/ScoreDrillDownExpandedDetail';

type Props = {
  instanceData: ICorrelationsInstance;
  isEmployeeVisible?: boolean;
  isExpandable?: boolean;
};

const CorrelationsInstanceTableRow: React.FC<Props> = ({
  instanceData,
  isEmployeeVisible,
  isExpandable = false,
}) => {
  const mood = sentimentWidget(instanceData.sentiment);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <tr
      onClick={() => setIsExpanded(!isExpanded)}
      className={`border-t border-solid border-gray-slate-600 text-[15px] ${
        isExpandable ? 'cursor-pointer' : ''
      } ${isExpanded && isExpandable ? 'bg-yellow-slate-100' : 'bg-white'}`}
    >
      <td className="w-[5%] py-3 px-5 align-top">
        <div
          className={`icon-${instanceData.product} inline-block h-6 w-6 ml-0 -mr-1 -mt-2.5 -mb-2 bg-[auto_100%]`}
        />
      </td>
      <td
        className={`${
          isEmployeeVisible ? 'w-[50%]' : 'w-[70%]'
        } py-3 px-5 align-top`}
      >
        <span className="ellipsis">{instanceData.title}</span>
        {isExpanded && isExpandable && (
          <ScoreDrillDownExpandedDetail
            eventDrillDownData={eventDrillDownData}
          />
        )}
      </td>
      {isEmployeeVisible && (
        <td className="w-[20%] py-3 px-5 text-right align-top">
          {instanceData.employee}
        </td>
      )}
      <td className="w-[15%] py-3 px-5 align-top">
        {instanceData.date} - {mtsToHrs(instanceData.start_time)}
      </td>
      <td className="w-[5%] py-3 px-5 align-top">
        <div className="flex justify-center">
          {mood.icon && (
            <FontAwesomeIcon
              icon={mood.icon}
              color={mood.backGroundColor}
              width="20px"
              height="20px"
            />
          )}
        </div>
      </td>
    </tr>
  );
};

export default CorrelationsInstanceTableRow;
