const DateDropDown = () => {
  return (
    <select
      className="text-center cursor-pointer rounded-lg  bg-gray-slate-500 font-[400] py-2 px-3 border-r-[10px] border-r-gray-slate-500 border-solid"
      name="filter"
      id="date-filter"
    >
      <option value="yesterday">Yesterday</option>
      <option value="this-week">This week</option>
      <option value="last-7-days" defaultValue={'last-7-days'}>
        Last 7 days
      </option>
      <option value="this-month">This month</option>
      <option value="last-30-days">Last 30 days</option>
      <option value="custom">Custom</option>
    </select>
  );
};

export default DateDropDown;
