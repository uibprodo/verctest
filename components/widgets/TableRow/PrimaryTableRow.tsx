import { ReactElement } from 'react';

import Link from 'next/link';

import { TableRowType } from '@/utils/constants';
import { getColorByUserName } from '@/utils/utils';

type props = {
  children: ReactElement;
  nameForBorderColor?: string;
  variant?: number;
  href?: string;
};

const TableRow: React.FC<props> = ({
  children,
  nameForBorderColor,
  variant,
  href = '#',
}) => {
  if (variant === TableRowType.HTMLTableType) {
    return (
      <tr
        className="border-b border-solid border-gray-slate-600 py-2 px-5 cursor-pointer border-l-2 transition-all duration-[0.2s] ease-[ease-in] 
    hover:bg-gray-slate-800 hover:shadow-none hover:pl-5 hover:border-l-[6px] w-full"
        style={{
          borderLeftColor: nameForBorderColor
            ? getColorByUserName(nameForBorderColor)[1]
            : '#1e86d9',
        }}
      >
        {children}
      </tr>
    );
  } else {
    return (
      <li className="border-b border-solid border-gray-slate-600">
        <Link
          className="flex justify-between py-2 px-5 cursor-pointer border-l-2 border-solid transition-all duration-[0.2s] ease-[ease-in] 
    hover:bg-gray-slate-800 hover:shadow-none hover:pl-5 hover:border-l-[6px]"
          style={{
            borderLeftColor: nameForBorderColor
              ? getColorByUserName(nameForBorderColor)[1]
              : '#1e86d9',
          }}
          href={href}
        >
          {children}
        </Link>
      </li>
    );
  }
};

export default TableRow;
