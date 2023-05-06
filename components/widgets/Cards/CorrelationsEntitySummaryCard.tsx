import { faSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getIcon } from '@/utils/utils';

type Props = {
  entityType: string;
};

const CorrelationsEntitySummaryCard: React.FC<Props> = ({ entityType }) => {
  const { icon, backgroundColor } = getIcon(entityType);
  return (
    <div className="flex card-wrap items-center p-3 gap-3">
      <div
        className={`flex justify-center items-center h-[60px] w-[60px] bg-contain rounded-full`}
        style={{
          backgroundColor: backgroundColor ? backgroundColor : '#1e86d9',
        }}
      >
        <FontAwesomeIcon
          icon={icon ? icon : faSlash}
          color="white"
          width="20px"
          height="20px"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-sm">{entityType}</h3>
        <h3 className="text-xl font-semibold">Test</h3>
      </div>
    </div>
  );
};

export default CorrelationsEntitySummaryCard;
