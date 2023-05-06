import React, { useState } from 'react';

import CustomDatePicker from '../widgets/Datepicker/CustomDatePicker/CustomDatePicker';
import AvatarDropDown from './AvatarDropDown';
import DateDropDown from './DateDropDown';
import HamBurgerButton from './HamBurgerButton';

type Props = {
  isSideBarClosed: boolean;
  isHamburgerIconClicked: boolean;
  setIsSideBarClosed: (_isSideBarClosed: boolean) => void;
  setIsHamburgerIconClicked: (_isHamburgerIconClicked: boolean) => void;
};

const NavBar: React.FC<Props> = ({
  isSideBarClosed,
  isHamburgerIconClicked,
  setIsHamburgerIconClicked,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <nav
      id="header"
      className={`fixed flex ${
        isSideBarClosed
          ? `w-full lg:w-[calc(100%_-_88px)] left-0 lg:left-[88px]`
          : 'w-full lg:w-[calc(100%_-_265px)] left-0 lg:left-[265px]'
      } z-30 py-1 bg-white h-[72px] shadow-[0_0px_8px_-3px_#163954]`}
    >
      <div className="w-full flex items-center justify-between mt-0 px-6">
        <HamBurgerButton
          isHamburgerIconClicked={isHamburgerIconClicked}
          setIsHamburgerIconClicked={setIsHamburgerIconClicked}
        />
        <div className="flex items-center w-full">
          <nav className="w-full lg:ml-0 ml-4">
            <ul className="sm:flex items-center text-base gap-10 text-blue-600 pt-0">
              <li>
                <DateDropDown />
              </li>
              <li className="md:flex hidden gap-2 items-center">
                <span>From</span>
                <CustomDatePicker
                  selected={startDate}
                  onChange={setStartDate}
                  className="text-center cursor-pointer rounded-lg border-[none] font-[400] bg-gray-slate-500 text-sm py-2 px-6"
                />
              </li>
              <li className="md:flex hidden gap-2 items-center">
                <span>To</span>
                <CustomDatePicker
                  selected={endDate}
                  onChange={setEndDate}
                  className="text-center cursor-pointer rounded-lg border-[none] font-[400] bg-gray-slate-500 text-sm py-2 px-6"
                />
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="order-2 lg:order-3 flex flex-wrap items-center justify-end mr-0 lg:mr-4"
          id="nav-content"
        >
          <div className="flex items-center w-full lg:w-full">
            <AvatarDropDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
