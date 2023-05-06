import { useState } from 'react';

import domainSettings from '@/mocks/domainSettingsMock.json';
import data from '@/mocks/employeeDayStatMock.json';
import { timeToMts } from '@/utils/utils';

import EmployeePerformanceChart from '../../Charts/EmployeePerformanceChart';
import EmployeeProdoscore from '../../Charts/EmployeeProdoscore';
import TimeLineChart from '../../Charts/TimeLineChart';
import ProductInputs from '../../ProductInputs/ProductInputs';
import ScoreDrillDown from '../../ScoreDrillDown/ScoreDrillDown';

type annotationValues = {
  xMin: number;
  xMax: number;
};

const dataTransform = () => {
  var dayStart = timeToMts(domainSettings.daystart) / 60;
  var dayEnd = timeToMts(domainSettings.dayend) / 60;
  if (
    domainSettings.crop_timeline &&
    ((domainSettings.daystart == '00:00' && domainSettings.dayend == '23:59') ||
      ((domainSettings.daystart != '00:00' ||
        domainSettings.dayend != '23:59') &&
        !domainSettings.gap_time))
  ) {
    (dayStart = 1440), (dayEnd = 0);
    for (let i in data.detail) {
      //@ts-ignore
      if (data.detail[i].flag == 0) {
        //@ts-ignore
        if (data.detail[i].time[0] < dayStart)
          //@ts-ignore
          dayStart = data.detail[i].time[0];
          //@ts-ignore
        if (data.detail[i].time[1] > dayEnd) dayEnd = data.detail[i].time[1];
      }
    }
    //
    if (domainSettings.gap_time) {
      let gapTimeStart =
        timeToMts(domainSettings.gap_time_start) - data.tzoffset * 60;
      let gapTimeEnd =
        timeToMts(domainSettings.gap_time_end) - data.tzoffset * 60;
      if (dayStart > gapTimeStart) dayStart = gapTimeStart;
      if (dayEnd < gapTimeEnd) dayEnd = gapTimeEnd;
    }
    //
    dayStart = data.tzoffset + dayStart / 60;
    dayEnd = data.tzoffset + dayEnd / 60;

    return {
      dayStart: dayStart,
      dayEnd: dayEnd,
    };
  }
};

const EmployeeStatisticsTab: React.FC = () => {
  const [x, _setX] = useState<annotationValues>({ xMin: 10, xMax: 20 });
  return (
    <div className="flex flex-col gap-3">
      <EmployeeProdoscore />
      <ProductInputs />
      <EmployeePerformanceChart annotationValues={x} />
      <TimeLineChart
        employeeDayData={data}
        //@ts-ignore
        emptz={data.emptz}
        domainSettings={domainSettings}
        dayStart={dataTransform()?.dayStart}
        dayEnd={dataTransform()?.dayEnd}
        showActivities={true}
        segmentWidth={150}
      />
      <ScoreDrillDown />
    </div>
  );
};

export default EmployeeStatisticsTab;
