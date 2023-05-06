import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';

type Props = {
  onDownoladClicked: (_showModal: boolean) => void;
  onShowFilterClicked?: (_showFilters: boolean) => void;
  isFiltersVisible?: boolean;
  isFilteringAvailable?: boolean;
};

const TrendControllerButtons: React.FC<Props> = ({
  onDownoladClicked,
  onShowFilterClicked,
  isFiltersVisible,
  isFilteringAvailable,
}) => {
  return (
    <div className="flex gap-1 justify-end mb-2">
      <PrimaryButton onClick={() => onDownoladClicked(true)} variant="white">
        <FontAwesomeIcon
          icon={faDownload}
          color="text-primary-blue"
          width="15px"
          height="15px"
          className="inline mr-2 mb-1"
        />
        Download
      </PrimaryButton>
      {onShowFilterClicked && isFilteringAvailable && (
        <PrimaryButton
          onClick={() => onShowFilterClicked(!isFiltersVisible)}
          variant="white"
        >
          {isFiltersVisible ? 'Hide' : 'Show'} Filters
        </PrimaryButton>
      )}
    </div>
  );
};

export default TrendControllerButtons;
