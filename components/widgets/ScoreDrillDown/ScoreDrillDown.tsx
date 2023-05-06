import { useEffect, useState } from 'react';

import { Detail } from '@/interfaces/employees';
import data from '@/mocks/employeeDayStatMock.json';

import ScoreDrillDownRow from './ScoreDrillDownRow';

const ScoreDrillDown: React.FC = () => {
  const [events, setEvents] = useState<Detail[]>([]);
  useEffect(() => {
    const keys = Object.keys(data?.detail!!);
    const processedEvent = Object.values(data?.detail!!).map(
      (eventDetail, i) => {
        return { ...eventDetail, id: keys[i] };
      }
    );
    setEvents(processedEvent);
  }, []);

  return (
    <div className="card-wrap">
      <div className="flex px-5 pb-3 font-semibold text-base items-center border-b border-solid border-gray-slate-600">
        <h2>Score details drill down</h2>
      </div>
      <div>
        <table className="table-fixed w-full text-[15px] bg-white box-border shadow-[0_2px_2px_#f5f2ef] border p-2.5 rounded-[3px] border-collapse border-solid border-[rgba(35,35,35,0.1)]">
          <thead className="border-b border-solid border-gray-slate-600">
            <tr className="text-left border-collapse border-solid border-[rgba(35,35,35,0.1)]">
              <th className="relative whitespace-nowrap w-12 px-5 py-4"></th>
              <th className="w-[70%] px-5 py-4 align-top">Title</th>
              <th className="w-[95px] text-right px-5 py-4 align-top">Time</th>
              <th className="table-cell px-5 py-4 w-[50px] text-center align-top">
                Mood
              </th>
            </tr>
          </thead>
          <tbody>
            {events?.map((event) => (
              <ScoreDrillDownRow key={event.id} event={event} />
            ))}
          </tbody>
          <tfoot>
            <tr className="total-entries">
              <th className=""></th>
              <th className="text-left px-5 py-4" colSpan={2}>
                Total Entries: {events?.length}
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ScoreDrillDown;
