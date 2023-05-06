import { Events } from '@/interfaces/events';

type Props = {
  eventDrillDownData: Events;
};

const ScoreDrillDownExpandedDetail: React.FC<Props> = ({
  eventDrillDownData,
}) => {
  return (
    <table className="stat-details-inner" title="">
      <tbody className="text-[13px]">
        <tr className="border-b border-solid border-[rgba(35,35,35,0.1)]">
          <td className="align-top p-2">Status</td>
          <td className="align-top p-2">{eventDrillDownData.data.status}</td>
        </tr>
        <tr className="border-b border-solid border-[rgba(35,35,35,0.1)]">
          <td className="align-top p-2">Duration</td>
          <td className="align-top p-2">{eventDrillDownData.data.duration}</td>
        </tr>
        <tr className="border-b border-solid border-[rgba(35,35,35,0.1)]">
          <td className="align-top p-2">Description</td>
          <td className="align-top p-2">
            {eventDrillDownData.data.description
              .split('\n')
              .map((item, idx) => {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                );
              })}
          </td>
        </tr>
        <tr className="border-b border-solid border-[rgba(35,35,35,0.1)]">
          <td className="align-top p-2">Attendees</td>
          <td className="align-top p-2">
            <ul>
              {eventDrillDownData.data.attendees.map((attendies) => (
                <li key={attendies.email}>{attendies.email}</li>
              ))}
            </ul>
          </td>
        </tr>
        <tr>
          <td colSpan={2} className="entities"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default ScoreDrillDownExpandedDetail;
