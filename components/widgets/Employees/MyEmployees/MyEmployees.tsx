import { IEmployee, IEmployeeList } from '@/interfaces/employees';
import { getRangeColorByScore, getRangeName } from '@/utils/utils';

import TableRow from '../../TableRow/PrimaryTableRow';

type Props = {
  employees: IEmployeeList | IEmployee[];
  heading?: string;
};

const MyEmployees: React.FC<Props> = ({
  employees,
  heading = 'My Employees',
}) => {
  return (
    <div className="flex flex-col card-wrap">
      <h2 className="font-semibold py-2 px-5 first-letter:capitalize">
        {heading}
      </h2>
      <ul className="border border-solid text-sm text-gray-slate-900 border-gray-slate-600 w-full h-auto inline-block mt-2.5 mb-5">
        <>
          {Object.values(employees)?.map((employee) => (
            <TableRow key={employee.id} nameForBorderColor={employee.fullname}>
              <div className="flex justify-between w-full" key={employee.id}>
                <div>
                  <p>{employee.fullname}</p>
                </div>
                <div
                  className={`flex gap-2 ${
                    getRangeColorByScore(employee.scr?.l ? employee.scr?.l : 0)
                      .textColor
                  }`}
                >
                  <p>{Math.trunc(employee.scr?.l ? employee.scr?.l : 0)}</p>
                  <div className={`flex w-12`}>
                    <p className="text-right">
                      {getRangeName(
                        Math.trunc(employee.scr?.l ? employee.scr?.l : 0)
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </TableRow>
          ))}
        </>
      </ul>
    </div>
  );
};

export default MyEmployees;
