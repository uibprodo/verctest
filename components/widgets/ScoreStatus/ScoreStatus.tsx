import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  score: number;
  percentage: number;
};

const ScoreStatus: React.FC<Props> = ({ score, percentage }) => {
  return (
    <div className="flex gap-4 my-4">
      <h2 className="font-semibold text-center">
        Organization Prodoscore <span className="text-2xl">{score}</span>
      </h2>
      <div className="flex items-center gap-1 text-primary-blue">
        <FontAwesomeIcon icon={faArrowUp} width="20px" height="20px" />
        <h2 className="font-semibold text-center">
          <span className="text-2xl">{percentage}% </span> Performance increase
        </h2>
      </div>
    </div>
  );
};

export default ScoreStatus;
