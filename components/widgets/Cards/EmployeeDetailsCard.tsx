import { IEmployee, IRoles } from '@/interfaces/employees';
import { getColorByUserName, getRole } from '@/utils/utils';

type Props = {
  self?: IEmployee;
  roleData?: IRoles;
};
const EmployeeDetailsCard: React.FC<Props> = ({ self, roleData }) => {
  const imageUrl = self?.picture
    ? `https://qa03.prv-prodoscore.com${self?.picture}`
    : null;
  return (
    <div className="flex card-wrap items-center p-3 gap-3">
      <div
        className="flex justify-center items-center h-[60px] w-[60px] bg-contain bg-center bg-no-repeat rounded-full text-white border border-solid"
        style={{
          backgroundImage: imageUrl ? `url(${imageUrl})` : 'none',
          borderColor: getColorByUserName(self?.fullname)[1],
          backgroundColor: getColorByUserName(self?.fullname)[1],
        }}
      >
        {!imageUrl && self?.fullname?.length
          ? self?.fullname[0].toUpperCase()
          : ''}
      </div>
      <div className="flex flex-col justify-center">
        {roleData && self?.role && (
          <h3 className="text-sm">
            {getRole(roleData, self?.role.toString())}
          </h3>
        )}
        <h3 className="text-xl font-semibold">{self?.fullname}</h3>
        {self?.manager_details && (
          <h3 className="text-base">
            Working Under{' '}
            <span className="text-primary-blue cursor-pointer">
              {self?.manager_details?.fullname}
            </span>
          </h3>
        )}
      </div>
    </div>
  );
};

export default EmployeeDetailsCard;
