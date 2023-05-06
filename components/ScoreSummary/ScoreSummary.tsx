type Props = {
  backgroundColor: string;
  borderColor: string;
  averageRange: string;
  employeeCount: number;
  change: number;
  changeDifference: string;
  scoreRange: string;
};

const ScoreSummary: React.FC<Props> = ({
  backgroundColor,
  borderColor,
  averageRange,
  employeeCount,
  change,
  changeDifference,
  scoreRange,
}) => {
  return (
    <div
      className={`${backgroundColor} ${borderColor} 
      flex flex-col sm:flex-row lg:flex-col justify-between lg:justify-center lg:items-center border-solid border-b-[5px] py-4 sm:py-2 lg:py-6 px-4 sm:pl-4 sm:pr-8 lg:px-0 gap-4 sm:gap-0`}
    >
      <div className="flex flex-col justify-center items-center sm:items-start">
        <h3 className="font-semibold">
          Productivity is {averageRange} average
        </h3>
        <p className="text-sm hidden sm:block lg:hidden">{scoreRange}</p>
      </div>
      <div className="flex gap-10 lg:gap-7 justify-center sm:justify-start items-center">
        <div className="flex flex-col justify-center items-center my-0 lg:my-4">
          <h1 className="text-2xl sm:text-lg lg:text-4xl">{employeeCount}</h1>
          <p>Employess</p>
        </div>
        <div className="w-2 h-10 skew-x-[-20deg] bg-gray-slate-600 mb-4" />
        <div className="flex flex-col justify-center items-center my-0 lg:my-4">
          <h1 className="text-2xl sm:text-lg lg:text-4xl">{change}%</h1>
          <p>{changeDifference}</p>
        </div>
      </div>
      <p className="text-sm block sm:hidden lg:block text-center">
        Prodoscore is {scoreRange}
      </p>
    </div>
  );
};

export default ScoreSummary;
