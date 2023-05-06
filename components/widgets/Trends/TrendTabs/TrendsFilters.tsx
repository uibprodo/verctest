import { TrendsTableStructure } from '@/utils/types';

import Toggle from '../../Toggle/Toggle';

type Props = {
  filterList: TrendsTableStructure[];
  setFilterList: (_filterList: TrendsTableStructure[]) => void;
};

const TrendsFilters: React.FC<Props> = ({ filterList, setFilterList }) => {
  return (
    <div className="flex gap-2">
      {filterList.map((item) =>
        item.filterAvailable ? (
          <Toggle
            key={item.heading}
            name={item.heading}
            onChange={() =>
              setFilterList(
                filterList.map((it) =>
                  it.heading === item.heading
                    ? { ...it, filterValue: !it.filterValue }
                    : it
                )
              )
            }
          />
        ) : null
      )}
    </div>
  );
};

export default TrendsFilters;
