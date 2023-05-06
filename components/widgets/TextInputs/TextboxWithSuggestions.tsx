import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  searchTerm: string;
  setSearchTerm: (_searchTerm: string) => void;
  suggestions?: any[];
  suggestionsContainerStyles?: string;
};
const suggestionsContainerDefault =
  'border bg-white shadow-[0px_0px_4px_-2px_#000000] duration-[0.3s] z-[1] max-h-[280px] border-solid border-[#C0C0C0] w-[260px]';
const TextboxWithSuggestions: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  suggestions,
  suggestionsContainerStyles = suggestionsContainerDefault,
}) => {
  return (
    <div className="relative w-52">
      <input
        className="py-2 pl-3 pr-6"
        placeholder="Search"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
      />
      {searchTerm.trim() && (
        <FontAwesomeIcon
          icon={faTimes}
          color="red"
          width="20px"
          height="20px"
          className="absolute top-[28%] left-[85%]"
          onClick={() => setSearchTerm('')}
        />
      )}
      {searchTerm.trim() && (
        <ul
          className={`absolute list-none cursor-pointer overflow-y-auto overflow-x-hidden m-0 p-0 left-[1.5%] ${suggestionsContainerStyles}`}
        >
          <li className="relative flex items-center gap-1 hover:text-white hover:bg-primary-blue">
            <FontAwesomeIcon
              icon={faSearch}
              color="text-black hover:text-white"
              width="22px"
              height="22px"
              className="p-1"
            />
            <span className="mt-1">{searchTerm}</span>
          </li>
          {suggestions?.map((topic) => (
            <li
              key={topic}
              className="p-1 hover:text-white hover:bg-primary-blue"
              onClick={() => setSearchTerm(topic)}
            >
              {topic}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TextboxWithSuggestions;
