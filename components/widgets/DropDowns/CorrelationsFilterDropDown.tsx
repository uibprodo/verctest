import { useState } from 'react';

import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CorrelationFilterItem } from '@/utils/types';

type Props = {
  heading: string;
  filterItems: CorrelationFilterItem[];
  setFilterItems: (_filterItem: CorrelationFilterItem[]) => void;
  isCanSelectOnlyOne?: boolean;
  isLeastOneShouldBeSelected?: boolean;
};

const CorrelationsFilterDropDown: React.FC<Props> = ({
  heading,
  filterItems,
  setFilterItems,
  isCanSelectOnlyOne,
}) => {
  const [display, setDisplay] = useState(false);
  const handleFiltering = (topic: CorrelationFilterItem) => {
    if (isCanSelectOnlyOne) {
      setFilterItems(
        filterItems.map((mappedTopic) =>
          mappedTopic.name === topic.name
            ? {
                ...mappedTopic,
                checked: mappedTopic.checked
                  ? mappedTopic.checked
                  : !mappedTopic.checked,
              }
            : { ...mappedTopic, checked: false }
        )
      );
    } else {
      setFilterItems(
        filterItems.map((mappedTopic) =>
          mappedTopic.name === topic.name
            ? { ...mappedTopic, checked: !mappedTopic.checked }
            : mappedTopic
        )
      );
    }
  };

  return (
    <div className="relative flex flex-col text-center py-2 px-4">
      <div
        className="flex items-center gap-1"
        onMouseOver={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        <label>{heading}</label>
        <FontAwesomeIcon
          icon={faCaretDown}
          color="black"
          width="15px"
          height="15px"
        />
      </div>
      <ul
        className={`list-none absolute z-[100] top-[80%] cursor-pointer bg-white border px-2.5 py-1.5 border-solid border-[#ced2d4] ${
          display ? 'block' : 'hidden'
        }`}
        onMouseOver={() => setDisplay(true)}
        onMouseLeave={() => setDisplay(false)}
      >
        {filterItems.map((topic) => (
          <li key={topic.name} onClick={() => handleFiltering(topic)}>
            <div className="flex text-[13px] items-center">
              <input
                type="checkbox"
                className="styled-checkbox mt-[3px]"
                checked={topic.checked}
                onChange={() => handleFiltering(topic)}
              />
              <div className="flex gap-1 items-center">
                {topic.icon && (
                  <FontAwesomeIcon
                    icon={topic.icon}
                    color={topic.iconColor}
                    width="12px"
                    height="12px"
                  />
                )}
                <p className="mt-[3px]">{topic.name}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CorrelationsFilterDropDown;
