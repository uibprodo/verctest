type Props = {
  isEmployeeVisible?: boolean;
};

const CorrelationsInstanceTableHeader: React.FC<Props> = ({
  isEmployeeVisible,
}) => {
  return (
    <thead>
      <tr className="text-[15px]">
        <th className="w-[5%] py-3 px-5"></th>
        <th
          className={`${
            isEmployeeVisible ? 'w-[50%]' : 'w-[70%]'
          } py-3 px-5 text-left`}
        >
          Title
        </th>
        {isEmployeeVisible && (
          <th className="w-[20%] py-3 px-5 text-right">Employee</th>
        )}
        <th className="w-[15%] py-3 px-5 text-left">Date - Time</th>
        <th className="w-[5%] py-3 px-5 text-center">Mood</th>
      </tr>
    </thead>
  );
};

export default CorrelationsInstanceTableHeader;
