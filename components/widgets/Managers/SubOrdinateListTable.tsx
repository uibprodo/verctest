import React from 'react';

import { IManagerScore } from '@/interfaces/managers';

import TableRow from '../TableRow/PrimaryTableRow';

type Props = {
  heading: string;
  empolyeesData?: IManagerScore[];
};

const ListTable: React.FC<Props> = ({ heading, empolyeesData }) => {
  return (
    <div className="flex flex-col card-wrap min-h-[200px]">
      <div className="flex justify-between">
        <h2 className="font-semibold px-5">{heading}</h2>
        <div className="flex items-center px-5 gap-2">
          <p className="text-xs text-gray-slate-100 font-semibold">Manager</p>
          <p className="text-xs text-gray-slate-100 font-semibold">
            Subordinates
          </p>
        </div>
      </div>
      <ul className="border border-solid text-sm text-gray-slate-900 border-gray-slate-600 w-full h-auto inline-block mt-2.5 mb-2">
        <>
          {empolyeesData?.map((item) => (
            <TableRow key={item.id} nameForBorderColor={item.name}>
              <div className="flex justify-between w-full" key={item.id}>
                <div>
                  <p>{item.name}</p>
                </div>
                <div className="flex gap-10 px-2 text-right">
                  <p className="min-w-[40px]">{item.manager}</p>
                  <p className="min-w-[40px]">{item.subordinates}</p>
                </div>
              </div>
            </TableRow>
          ))}
        </>
      </ul>
    </div>
  );
};

export default ListTable;
