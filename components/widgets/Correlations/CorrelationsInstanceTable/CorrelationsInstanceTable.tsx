import data from '@/mocks/correlationsInstanceMock.json';

import CorrelationsInstanceTableHeader from './CorrelationsInstanceTableHeader';
import CorrelationsInstanceTableRow from './CorrelationsInstanceTableRow';

type Props = {
  isEmployeeVisible?: boolean;
  isExpandable?: boolean;
};

const CorrelationsInstanceTable: React.FC<Props> = ({
  isEmployeeVisible,
  isExpandable,
}) => {
  return (
    <table className="card-wrap">
      <CorrelationsInstanceTableHeader isEmployeeVisible={isEmployeeVisible} />
      <tbody>
        {data.map((item, index) => (
          <CorrelationsInstanceTableRow
            key={item.date + index}
            instanceData={item}
            isEmployeeVisible={isEmployeeVisible}
            isExpandable={isExpandable}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CorrelationsInstanceTable;
