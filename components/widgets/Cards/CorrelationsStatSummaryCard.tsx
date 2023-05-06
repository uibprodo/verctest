import { getRangeColorByScore } from '@/utils/utils';

const CorrelationsStatSummaryCard: React.FC = () => {
  return (
    <div className="flex card-wrap p-3">
      <div
        className={`flex flex-col justify-center ${
          getRangeColorByScore(40).textColor
        }`}
      >
        <h3 className="text-base">
          <span className="text-2xl">40</span> Mentions
        </h3>
        <h3 className="text-base">
          <span className="text-2xl">10%</span> Internals
        </h3>
      </div>
    </div>
  );
};

export default CorrelationsStatSummaryCard;
