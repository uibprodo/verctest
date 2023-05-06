import { TableRowType } from '@/utils/constants';
import { EmployeeFilterTable, TransformedEmployees } from '@/utils/types';

import TableRow from '../../TableRow/PrimaryTableRow';

type Props = {
  employee?: TransformedEmployees;
  filterTableStructure: EmployeeFilterTable[];
};

const EmployeeFilterTableRow: React.FC<Props> = ({
  employee,
  filterTableStructure,
}) => {
  return (
    <TableRow
      variant={TableRowType.HTMLTableType}
      nameForBorderColor={employee?.employeeName}
    >
      <>
        {filterTableStructure.map((structItem) => (
          <td
            key={structItem.colItem}
            className={`${structItem.width} ${structItem.mediaQuery} py-3 px-4`}
          >
            {employee && employee[structItem.colItem as keyof typeof employee]}
          </td>
        ))}
      </>
    </TableRow>
  );
};

export default EmployeeFilterTableRow;
