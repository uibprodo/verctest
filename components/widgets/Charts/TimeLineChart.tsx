import { useEffect, useState } from 'react';

import { Detail, IEmployeeStats } from '@/interfaces/employees';
import { EventsUi, GapTime, GapTimeMarker, Segments } from '@/utils/types';
import { mtsToHrs, timeToDecimalTime, timeToMts } from '@/utils/utils';

type Props = {
  employeeDayData?: IEmployeeStats;
  segmentWidth?: number;
  eventHeight?: number;
  dayStart?: number;
  dayEnd?: number;
  gapTimeMin?: number;
  unit?: number;
  domainSettings?: any;
  employee?: any;
  showActivities?: boolean;
  maxHeight?: 300;
  displayTitleFor?: string[];
};

const TimeLineChart: React.FC<Props> = ({
  employeeDayData,
  domainSettings,
  eventHeight = 20,
  dayStart = 9,
  dayEnd = 18,
  segmentWidth = 150,
  gapTimeMin = 11,
  unit = 20,
  displayTitleFor = [
    'cl',
    'tb',
    'zc',
    'ze',
    'bs',
    'cll',
    'rcc',
    'cvc',
    'sfc',
    'vbc',
    'oev',
    'rcm',
    'mt',
    'mt_cl',
    'gtc_c',
    '8x8_c',
    'zm_mt',
    'rf_ap',
    'wx_mt',
    'in_rcc',
    'sf_ev',
  ],
}) => {
  const [segments, setSegments] = useState<Segments[]>([]);
  const [events, setEvents] = useState<EventsUi[]>([]);
  const [gapTimes, setGapTimes] = useState<GapTime[]>([]);
  const [gapTimeMarkers, setGapTimeMarkers] = useState<GapTimeMarker[]>([]);
  const [activeEvent, setActiveEvent] = useState<string>('');
  const GroupEvent: any = [];

  useEffect(() => {
    if (employeeDayData !== null) {
      createSegements();
      createEvents();
      createGapTime();
      createTimeMarkers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeDayData]);

  const minutesToWidth = (minutes: number, type: any) => {
    if (typeof type == 'undefined') type = 'undefined';
    if (type == 'gap-time')
      return (minutes - (gapTimeMin - 1)) * (segmentWidth / 30);
    else {
      if (minutes > 0) minutes += 4;
      return Math.max(minutes * (segmentWidth / 30), unit);
    }
  };

  const timeToX = (time: number) => {
    const { timelineStart } = adjustTimeLineValues();
    return (time - timelineStart) * 2 * segmentWidth;
  };

  const adjustTimeLineValues = () => {
    let timelineStart = dayStart;
    let timelineEnd = dayEnd;
    // Find the Start and End times of the Work timeline
    if (Number.isInteger(timelineStart)) {
      // 10:00 => 09:30
      timelineStart -= 0.5;
    }
    // < 0.5
    else if (Math.floor(timelineStart) == Math.round(timelineStart)) {
      let hour = Math.floor(timelineStart);
      //
      if (timelineStart <= hour + 0.25) {
        // 10:00 - 10:15 => 09:30
        timelineStart = hour - 0.5;
      } else {
        // 10:15 - 10:30 => 10:00
        timelineStart = Math.floor(timelineStart);
      }
    }
    // > 0.5
    else {
      let hour = Math.floor(timelineStart);
      //
      if (timelineStart <= hour + 0.75) {
        // 10:30 - 10:45 => 10:00
        timelineStart = Math.floor(timelineStart);
      } else {
        // 10:45 - 11:00 => 10:30
        timelineStart = hour + 0.5;
      }
    }
    //
    if (Number.isInteger(timelineEnd)) {
      // 18:00 => 18:00
      // Do nothing
    }
    // < 0.5
    else if (Math.floor(timelineEnd) == Math.round(timelineEnd)) {
      let hour = Math.floor(timelineEnd);
      //
      if (timelineEnd <= hour + 0.25) {
        // 18:00 - 18:15 => 18:00
        timelineEnd = Math.floor(timelineEnd);
      } else {
        // 18:15 - 18:30 => 18:30
        timelineEnd = hour + 0.5;
      }
    }
    // > 0.5
    else {
      let hour = Math.floor(timelineEnd);
      //
      if (timelineEnd <= hour + 0.75) {
        // 18:30 - 18:45 => 18:30
        timelineEnd = hour + 0.5;
      } else {
        // 18:45 - 19:00 => 19:00
        timelineEnd = hour + 1;
      }
    }
    //
    if (timelineStart < 0) timelineStart = 0;
    if (timelineEnd > 23.5) timelineEnd = 23.5;
    return {
      timelineStart,
      timelineEnd,
    };
  };

  const createSegements = () => {
    let workHours: Segments[] = [];
    // Calculating the list of hours/half-hours to be included within the Work timeline
    const { timelineStart, timelineEnd } = adjustTimeLineValues();
    for (let h = timelineStart; h <= timelineEnd; h += 0.5) {
      let timelineHour: Segments = { id: h };
      //
      if (Number.isInteger(h)) {
        // Hour (08:00)
        if (h < 10) {
          timelineHour.label = '0' + h + ':00';
        } else {
          timelineHour.label = h + ':00';
        }
        workHours.push(timelineHour);
      } else {
        // Half hour (08:30)
        let halfHour = Math.floor(h);
        if (halfHour < 10) {
          timelineHour.label = '0' + halfHour + ':30';
        } else {
          timelineHour.label = halfHour + ':30';
        }
        workHours.push(timelineHour);
      }
      setSegments(workHours);
    }
  };

  const createGapTime = () => {
    const gapTimeArray: GapTime[] = [];
    if (domainSettings.gap_time) {
      if (typeof employeeDayData?.gap_time != 'undefined') {
        employeeDayData.gap_time.gap_times.forEach((gapTime, i) => {
          let left = gapTime[0] + 7 + employeeDayData.tzoffset * 60;
          let width = gapTime[1] - gapTime[0];
          let right = left + width;
          // If no activity is available before the first Gap time, then change dimension of Gap time rectangle
          if (i == 0 && typeof employeeDayData.detail == 'object') {
            let detailEndTimes = Object.values(employeeDayData.detail)
              .filter((detail) => detail.flag == 0)
              .map((detail) => detail.time[1]); // Get detail end times of unflagged details
            if (!detailEndTimes.includes(gapTime[0])) {
              left -= 4;
              width += 4;
            }
          }
          if (left >= dayStart * 60 && right - 7 <= dayEnd * 60) {
            left = timeToDecimalTime(mtsToHrs(left));
            left = timeToX(left);
            width = minutesToWidth(width, 'gap-time');
          }
          gapTimeArray.push({ left, width });
        });
      }
    }
    setGapTimes(gapTimeArray);
  };

  const createTimeMarkers = () => {
    if (
      domainSettings.daystart == '00:00' &&
      domainSettings.dayend == '23:59'
    ) {
      let gapTimeMarkers = [
        ['Gap time start', domainSettings.gap_time_start],
        ['Gap time end', domainSettings.gap_time_end],
      ];
      const gapTimeMarkerDetails = gapTimeMarkers.map((marker) => {
        let markerTime = timeToMts(marker[1]);
        return {
          left: timeToX(timeToDecimalTime(mtsToHrs(markerTime))),
          title: marker[0],
        };
      });
      setGapTimeMarkers(gapTimeMarkerDetails);
    }
  };

  const createEventObj = (eventData: Detail): EventsUi => {
    const offest = employeeDayData?.tzoffset ? employeeDayData.tzoffset : 0;
    eventData.time[0] =
      eventData.time[0] + offest * 60 < 0 ? 0 - offest * 60 : eventData.time[0];
    eventData.time[0] =
      eventData.time[0] + offest * 60 > 24 * 60
        ? 24 * 60 - offest * 60
        : eventData.time[0];
    eventData.time[1] =
      eventData.time[1] + offest * 60 < 0 ? 0 - offest * 60 : eventData.time[1];
    eventData.time[1] =
      eventData.time[1] + offest * 60 > 24 * 60
        ? 24 * 60 - offest * 60
        : eventData.time[1];
    let decimalStartTime = timeToDecimalTime(
      mtsToHrs(eventData.time[0] + offest * 60)
    );
    let decimalEndTime = timeToDecimalTime(
      mtsToHrs(eventData.time[1] + offest * 60)
    );
    let gropValue = eventData.product + decimalStartTime + decimalEndTime;
    let index = GroupEvent.indexOf(gropValue);
    if (index == -1) {
      eventData.relTime = [eventData.time[0], eventData.time[1]];
      if (decimalEndTime < dayStart || decimalStartTime > dayEnd) {
        return { id: '' };
      }
      let width = 0;
      let xAxis = 0;
      let yAxis = 0;

      xAxis = timeToX(decimalStartTime);

      const endDay = dayEnd + offest > dayEnd ? dayEnd : dayEnd - offest;
      width = minutesToWidth(
        Math.min(eventData.relTime[1], endDay * 60) - eventData.relTime[0],
        eventData.product
      );
      return {
        id: eventData.id!!,
        position: 'absolute',
        top: yAxis + 22,
        left: xAxis,
        width: width,
        height: eventHeight,
        right: width + xAxis,
        bottom: 20 + yAxis + 22,
        label: displayTitleFor.includes(eventData.product)
          ? eventData.title
          : '',
        icon: 'icon-' + eventData.product,
      };
    }
    return { id: '' };
  };

  const createEvents = () => {
    const keys = Object.keys(employeeDayData?.detail!!);
    setEvents(
      fixOverlapIssues(
        Object.values(employeeDayData?.detail!!)
          .map((eventDetail, i) => {
            return { ...eventDetail, id: keys[i] };
          })
          .filter((eventDetail) => eventDetail.flag === 0)
          .map((eventDetail) => createEventObj(eventDetail))
      )
    );
  };

  const fixOverlapIssues = (events: EventsUi[]): EventsUi[] => {
    for (let z = 0; z < 2; z++) {
      for (let i = 0; i < events.length; i++) {
        for (let j = 0; j < events.length; j++) {
          if (i === j) {
            continue;
          }

          if (checkOverlap(events[i], events[j])) {
            let top = Math.trunc(events[j].top!!) + 20;
            events[j].top = top;
          }
        }
      }
    }
    return events;
  };

  const checkOverlap = (rect1: EventsUi, rect2: EventsUi): boolean => {
    if (
      !rect1.top ||
      !rect1.bottom ||
      !rect1.left ||
      !rect1.right ||
      !rect2.top ||
      !rect2.bottom ||
      !rect2.left ||
      !rect2.right
    )
      return false;
    let overlap = !(
      rect1.right <= rect2.left ||
      rect1.left >= rect2.right ||
      rect1.bottom <= rect2.top ||
      rect1.top >= rect2.bottom
    );
    return overlap;
  };

  return (
    <div className="flex flex-col card-wrap h-full">
      <h2 className="font-semibold py-2 px-5 border-b border-solid border-gray-slate-600">
        Performance throughout the day {employeeDayData?.emptz}
      </h2>
      <div className="h-full relative overflow-x-scroll">
        <div
          className="h-[245px] aboslute top-0 left-0 flex"
          style={{ width: segmentWidth * (segments ? segments.length : 0) }}
        >
          {segments.map((segment) => (
            <Segment
              key={segment.id}
              segment={segment}
              segWidth={segmentWidth}
            />
          ))}
        </div>
        <div
          className="aboslute top-0 left-0 flex"
          style={{ width: segmentWidth * (segments ? segments.length : 0) }}
        >
          {events.map((event) => (
            <Event
              key={event.id}
              event={event}
              setActiveEvent={setActiveEvent}
              activeEvent={activeEvent}
            />
          ))}
          {gapTimes?.map((gapTime, i) => (
            <GapTimeHighlighter key={gapTime.left + i} gapTime={gapTime} />
          ))}
          {gapTimeMarkers.map((marker, i) => (
            <GapTimeMarkerLabel key={marker.left + i} marker={marker} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLineChart;

type SegmentProps = {
  segWidth: number;
  segment: Segments;
};

const Segment: React.FC<SegmentProps> = ({ segWidth, segment }) => {
  return (
    <div
      className="h-full aboslute top-0 left-0 bg-white border-l-[#DDD] border-l border-solid"
      style={{ width: segWidth }}
    >
      <span className="relative block text-[11px] text-[#BBB] z-[1] pl-[5px]">
        {segment.label}
      </span>
    </div>
  );
};

type EventProps = {
  event: EventsUi;
  setActiveEvent: (_activeEvent: string) => void;
  activeEvent: string;
};

const Event: React.FC<EventProps> = ({
  event,
  setActiveEvent,
  activeEvent,
}) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: event.top,
        left: event.left,
        width: event.width,
        height: event.height,
      }}
      className={`flex bg-gray-slate-800 border border-solid border-gray-slate-200 ${
        activeEvent === event.id ? 'shadow-[0px_0px_16px_3px_#FFF000]' : ''
      }`}
      onClick={() => setActiveEvent(event.id)}
    >
      <i
        className={`${event.icon} h-[18px] w-[18px] bg-center bg-no-repeat bg-[length:15px_15px] m-0`}
      />
      {event.label && (
        <span className="flex items-center w-[calc(100%_-_18px)] text-xs leading-[18px] whitespace-nowrap overflow-hidden text-ellipsis select-none">
          {event.label}
        </span>
      )}
    </div>
  );
};

type GapTimeProps = {
  gapTime: GapTime;
};

const GapTimeHighlighter: React.FC<GapTimeProps> = ({ gapTime }) => {
  return (
    <div
      style={{
        width: gapTime.width,
        left: gapTime.left,
      }}
      className="absolute h-full bg-[#FCA098] hover:bg-[#fe978e] hover:px-[15px] hover:opacity-30 hover:ml-[-15px] box-content transition-all duration-[0.25s] top-0 opacity-25"
    />
  );
};
type GapTimeMarkersProps = {
  marker: any;
};

const GapTimeMarkerLabel: React.FC<GapTimeMarkersProps> = ({ marker }) => {
  return (
    <div
      className="absolute h-full bg-[#FCA098] box-content transition-all duration-[0.25s] top-0 w-1"
      style={{ left: marker.left }}
    >
      <p className="text-[white] font-[bold] text-[10px] bg-[#FCA098] w-max absolute z-[1] px-1.5 py-1 rounded-[5px] left-2.5 bottom-[13px]">
        {marker.title}
      </p>
    </div>
  );
};
