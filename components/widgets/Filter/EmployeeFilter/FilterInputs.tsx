import React from 'react';

type Props = {
  searchName: string;
  setSearchName: (_searchName: string) => void;
};

const FilterInputs: React.FC<Props> = ({ searchName, setSearchName }) => {
  return (
    <div className="w-full bg-gray-slate-500 shadow-[inset_0_3px_3px_#e5e5e5,inset_0_-2px_3px_#e5e5e5] m-0 p-[1%]">
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex flex-col w-full sm:w-1/3 gap-1">
          <label className="text-sm font-semibold">Employee</label>
          <input
            className="py-2 px-3 bg-white border border-solid border-[#D5DCE1] text-sm"
            placeholder="Search..."
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/3 gap-1">
          <label className="text-sm font-semibold">User role</label>
          <select
            className="py-[10px] px-3 bg-white border border-solid border-[#D5DCE1] text-sm"
            name="filter"
            id="date-filter"
          >
            <option value="administrator" defaultValue={'administrator'}>
              Administrator
            </option>
            <option value="manager">Manager</option>
          </select>
        </div>
        <div className="flex flex-col w-full sm:w-1/3 gap-1">
          <label className="text-sm font-semibold">Manager</label>
          <select
            className="py-[10px] px-3 bg-white border border-solid border-[#D5DCE1] text-sm"
            name="filter"
            id="date-filter"
          >
            <option value="dasontest" defaultValue={'dasontest'}>
              Dason Test
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterInputs;
