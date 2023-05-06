import Image, { StaticImageData } from 'next/image';

import { getArrowIcon } from '@/utils/utils';

import CircularProgress from '../ProgressBar/CircularProgressBar';

type Props = {
  score?: number;
  heading: string;
  icon: StaticImageData;
  rank?: number;
  heighest?: number | string;
  lowest?: number | string;
  scoreDelta?: number | null;
  deltaDesc?: string | null;
};

const MyDashBoardSummaryCard: React.FC<Props> = ({
  rank,
  heading,
  icon,
  score,
  heighest,
  lowest,
  scoreDelta,
  deltaDesc,
}) => {
  return (
    <div className="card-wrap px-6 py-5 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image src={icon} alt="icon" className="w-8 h-8" />
        <h4>{heading}</h4>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col justify-between py-1">
          {scoreDelta && deltaDesc ? (
            <div className="flex gap-2">
              <Image
                src={getArrowIcon(deltaDesc)}
                className="w-10 h-6"
                alt="icon"
              />
              <h4 className="font-semibold text-2xl">{scoreDelta} %</h4>
            </div>
          ) : (
            <h4 className="font-semibold text-2xl">N/A</h4>
          )}
          {rank ? (
            <div className="flex items-center gap-1">
              <p className="text-xs">Rank within the team</p>
              <h4 className="font-semibold text-xl">{rank}</h4>
            </div>
          ) : (
            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <p className="text-xs">Highest</p>
                <h4 className="font-semibold text-xl">{heighest}</h4>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-xs">Lowest</p>
                <h4 className="font-semibold text-xl">{lowest}</h4>
              </div>
            </div>
          )}
        </div>
        <CircularProgress percentage={score} />
      </div>
    </div>
  );
};

export default MyDashBoardSummaryCard;
