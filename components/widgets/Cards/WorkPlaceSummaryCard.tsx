import Image, { StaticImageData } from 'next/image';

import { faLevelUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CircularProgress from '../ProgressBar/CircularProgressBar';

type Props = {
  bgColor?: string;
  icon?: string | StaticImageData;
  topic?: string;
  percentage?: number;
  score?: number;
  borderColor?: string;
};

const WorkPlaceSummaryCard: React.FC<Props> = ({
  bgColor,
  icon,
  topic,
  percentage,
  score,
  borderColor,
}) => {
  return (
    <div
      className={`flex flex-col card-wrap ${bgColor} border border-solid ${borderColor} p-4`}
    >
      <div className="flex items-center gap-3">
        {icon && <Image src={icon} alt="icon" width={32} height={32} />}
        <h2 className="font-semibold text-base mt-2">{topic}</h2>
      </div>
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={faLevelUp}
            color="#1e86d9"
            width="25px"
            height="25px"
          />
          <h1 className="text-3xl">{percentage}%</h1>
        </div>
        <div className="flex mr-5">
          <CircularProgress percentage={score} />
        </div>
      </div>
    </div>
  );
};

export default WorkPlaceSummaryCard;
