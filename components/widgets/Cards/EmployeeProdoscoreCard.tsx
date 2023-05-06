import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SelfScr } from '@/interfaces/employees';
import { getArrowIconFor, getRangeColorByScore } from '@/utils/utils';

type Props = {
  subordinateScore?: number;
  score?: SelfScr;
};

const EmployeeProdoscoreCard: React.FC<Props> = ({
  score,
  subordinateScore,
}) => {
  return (
    <div className="flex card-wrap p-3">
      <div className={`flex flex-col justify-center`}>
        {subordinateScore && (
          <h3
            className={`text-base ${
              getRangeColorByScore(Math.trunc(subordinateScore)).textColor
            }`}
          >
            <span className="text-2xl">{subordinateScore}</span>{' '}
            Subordinate&apos;s Prodoscore
          </h3>
        )}
        {score?.l ? (
          <h3
            className={`text-base ${
              getRangeColorByScore(Math.trunc(score?.l)).textColor
            }`}
          >
            <span className="text-2xl">{Math.trunc(score?.l)}</span> Prodoscore
          </h3>
        ) : (
          <h3 className={`text-base $`}>Prodoscore</h3>
        )}
        {score?.delta && score?.delta !== 0 ? (
          <div
            className={`flex items-center gap-1 ${
              score.delta > 0 ? 'text-primary-blue' : 'text-primary-red'
            }`}
          >
            <FontAwesomeIcon
              width="15px"
              height="15px"
              icon={getArrowIconFor(score?.delta)}
            />
            <h3 className="text-base">
              <span className="text-2xl">{score?.delta}%</span>
              {score?.delta > 0
                ? ' Performance increase'
                : ' Performance decrease'}
            </h3>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EmployeeProdoscoreCard;
