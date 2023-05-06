import { useState } from 'react';

import {
  TrendsTableHeadingForAdminActivity,
  TrendsTableHeadingForEmployees,
  TrendsTableHeadingForLoginActivity,
  TrendsTableHeadingForRawData,
  TrendType,
} from '@/utils/constants';
import { TrendsTableStructure } from '@/utils/types';

import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';
import PrimaryModal from '../../Modals/PrimaryModal';
import TrendControllerButtons from './TrendControllerButtons';
import TrendsAdminActivitiesTable from './TrendsAdminActivitiesTable';
import TrendsEmployeeTable from './TrendsEmployeeTable';
import TrendsFilters from './TrendsFilters';
import TrendsLoginActivityTable from './TrendsLoginActivityTable';
import TrendsRawDataTable from './TrendsRawDataTable';
import { TrendsTableHeader, TrendsTableBody } from './TrendsTableStructure';

type Props = {
  tableType: TrendType;
  name: string;
  isFilteringAvailable?: boolean;
};

const TrendsCore: React.FC<Props> = ({
  tableType,
  isFilteringAvailable,
  name,
}) => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState<boolean>(false);
  const getStructure = (tableType: TrendType) => {
    if (tableType === TrendType.AdminActivity) {
      return TrendsTableHeadingForAdminActivity;
    } else if (tableType === TrendType.LoginActivity) {
      return TrendsTableHeadingForLoginActivity;
    } else if (tableType === TrendType.RawData) {
      return TrendsTableHeadingForRawData;
    }
    return TrendsTableHeadingForEmployees;
  };

  const [tableStructure, setTableStructure] = useState<TrendsTableStructure[]>(
    () => getStructure(tableType)
  );

  return (
    <>
      <div className="flex relative flex-col px-[1%]">
        <div className="flex justify-between items-center">
          <div>
            {isFiltersVisible && (
              <TrendsFilters
                filterList={tableStructure}
                setFilterList={setTableStructure}
              />
            )}
          </div>
          <div>
            <TrendControllerButtons
              onDownoladClicked={setIsModalVisible}
              onShowFilterClicked={setIsFiltersVisible}
              isFiltersVisible={isFiltersVisible}
              isFilteringAvailable={isFilteringAvailable}
            />
          </div>
        </div>
        <TrendsTableHeader tableStructure={tableStructure} />
        <TrendsTableBody>
          <TrendTable type={tableType} tableStructure={tableStructure} />
        </TrendsTableBody>
      </div>
      <PrimaryModal
        isOpen={isModalVisible}
        setIsOpen={setIsModalVisible}
        heading={`Prodoscore Trends [${name}]`}
      >
        <div
          className="flex flex-col w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col text-sm px-5 py-4 border-b border-solid border-gray-slate-600">
            <p>Please enter the email address to receive the report:</p>
            <input
              type="email"
              className="w-full border p-[5px] border-solid border-[#c3c3c3]"
            />
          </div>
          <div className="flex justify-end items-center py-2 px-4 gap-2">
            <PrimaryButton variant="white" className="py-1">
              Cancel
            </PrimaryButton>
            <PrimaryButton className="py-1">OK</PrimaryButton>
          </div>
        </div>
      </PrimaryModal>
    </>
  );
};

export default TrendsCore;

type TableProp = {
  type: TrendType;
  tableStructure: TrendsTableStructure[];
};

const TrendTable: React.FC<TableProp> = ({ type, tableStructure }) => {
  if (type === TrendType.AdminActivity) {
    return <TrendsAdminActivitiesTable tableStructure={tableStructure} />;
  } else if (type === TrendType.LoginActivity) {
    return <TrendsLoginActivityTable tableStructure={tableStructure} />;
  } else if (type === TrendType.RawData) {
    return <TrendsRawDataTable tableStructure={tableStructure} />;
  }
  return <TrendsEmployeeTable tableStructure={tableStructure} />;
};
