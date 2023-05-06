import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { EmployeeFilterTable } from '@/utils/types';

type Props = {
  setCurrentSort: (_item: any) => void;
  currentSort: any;
  filterTableStructure: EmployeeFilterTable[];
};

const TableHeader: React.FC<Props> = ({
  setCurrentSort,
  currentSort,
  filterTableStructure,
}) => {
  return (
    <thead className="border-b border-solid border-gray-slate-600">
      <tr className="text-left">
        {filterTableStructure.map((structItem) => (
          <th
            key={structItem.colItem}
            className={`${structItem.width} ${structItem.mediaQuery} py-3 px-4`}
            onClick={() =>
              setCurrentSort({
                category: structItem.colItem,
                ascending: !currentSort.ascending,
              })
            }
          >
            <div className="flex items-center gap-2">
              {structItem.heading}
              {currentSort.category === structItem.colItem && (
                <FontAwesomeIcon
                  icon={currentSort.ascending ? faCaretUp : faCaretDown}
                  color="black"
                  width="10px"
                  height="10px"
                />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
