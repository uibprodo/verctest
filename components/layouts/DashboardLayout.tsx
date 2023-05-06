import React, { ReactNode, useState } from 'react';

import NavBar from '@/components/navbar/NavBar';
import SideBar from '@/components/sidebar/SideBar';
import useOutsideAlerter from '@/hooks/uiHooks/useOutsideAlerter';

type Props = {
  children: ReactNode;
};

const DashboardLayout: React.FC<Props> = ({ children }) => {
  const [isSideBarClosed, setIsSideBarClosed] = useState<boolean>(true);
  const [isHamburgerIconClicked, setIsHamburgerIconClicked] =
    useState<boolean>(false);
  const [isOutSideClicked, setIsOutSideClicked] = useState<boolean>(false);

  const handleClickOutside = () => {
    setIsOutSideClicked(true);
    setIsHamburgerIconClicked(false);
    setIsOutSideClicked(false);
  };
  const ref = useOutsideAlerter(handleClickOutside);

  return (
    <div className="min-h-screen">
      <div ref={ref}>
        <NavBar
          isSideBarClosed={isSideBarClosed}
          setIsSideBarClosed={setIsSideBarClosed}
          isHamburgerIconClicked={isHamburgerIconClicked}
          setIsHamburgerIconClicked={setIsHamburgerIconClicked}
        />
        <SideBar
          isSideBarClosed={isSideBarClosed}
          setIsSideBarClosed={setIsSideBarClosed}
          isHamburgerIconClicked={isHamburgerIconClicked}
          isOutSideClicked={isOutSideClicked}
          setIsHamburgerIconClicked={setIsHamburgerIconClicked}
        />
      </div>
      <section
        className={`absolute w-full h-[calc(100vh_-_72px)] top-[72px] box-border overflow-y-scroll bg-primary-background transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)] 
        ${
          isSideBarClosed
            ? 'w-full lg:w-[calc(100%_-_88px)] left-0 lg:left-[88px]'
            : 'w-full lg:w-[calc(100%_-_265px)] left-0 lg:left-[265px]'
        }`}
      >
        {children}
      </section>
    </div>
  );
};

export default DashboardLayout;
