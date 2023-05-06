import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import eventDrillDownData from '@/mocks/eventsMock.json';
import { mtsToHrs, sentimentWidget } from '@/utils/utils';

import ScoreDrillDownExpandedDetail from './ScoreDrillDownExpandedDetail';

type Props = {
  event: any;
};

const ScoreDrillDownRow: React.FC<Props> = ({ event }) => {
  const mood = sentimentWidget(event.sentiment);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  return (
    <tr
      onClick={() => setIsExpanded(!isExpanded)}
      className={`text-left border-collapse border border-solid border-[rgba(35,35,35,0.1)] ${
        isExpanded ? 'bg-yellow-slate-100' : 'bg-white'
      }`}
      key={event.id}
    >
      <th
        className={`relative whitespace-nowrap w-12 px-5 py-4 align-top ${
          event.flag === 0 ? 'opacity-100' : 'opacity-50'
        }`}
      >
        <div className={`icon-${event.product} bg-contain w-5 h-5 ml-2`} />
      </th>
      <th className="w-[70%] px-5 py-4">
        <span
          className={event.flag === 0 ? 'text-black' : 'text-gray-slate-200'}
        >
          {event.title}
        </span>
        {isExpanded && (
          <ScoreDrillDownExpandedDetail
            eventDrillDownData={eventDrillDownData}
          />
        )}
      </th>
      <th
        className={`w-[95px] text-right px-5 py-4 align-top ${
          event.flag === 0 ? 'text-black' : 'text-gray-slate-200'
        }`}
      >
        {mtsToHrs(event.time[1] - event.time[0])}
      </th>
      <th
        className={`table-cell px-5 py-4 w-[50px] text-center align-top ${
          event.flag === 0 ? 'text-black' : 'text-gray-slate-200'
        }`}
      >
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
      </th>
    </tr>
  );
};

export default ScoreDrillDownRow;
