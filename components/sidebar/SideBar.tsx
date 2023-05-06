import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SideBarBottomLink from '@/components/sidebar/MyEmployees';
import SideBarLink from '@/components/sidebar/SideBarLink';
import { getSideBarStructure } from '@/utils/utils';

import prodoscoreWordMark from '../../public/img/logos/logo-text.png';
import prodoscoreLogo from '../../public/img/logos/prodoscore.png';

type Props = {
  isSideBarClosed: boolean;
  isHamburgerIconClicked: boolean;
  isOutSideClicked: boolean;
  setIsSideBarClosed: (_isSideBarClosed: boolean) => void;
  setIsHamburgerIconClicked: (_isHamburgerIconClicked: boolean) => void;
};

const SideBar: React.FC<Props> = ({
  isSideBarClosed,
  setIsSideBarClosed,
  isHamburgerIconClicked,
  isOutSideClicked,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();
  const { mainMenuItems, bottomMenuItems } = getSideBarStructure(
    router.route.split('/')[1]
  );
  return (
    <nav
      className={`fixed h-full z-[100] ${
        isHamburgerIconClicked && !isOutSideClicked
          ? 'left-0 shadow-[0px_0px_120px_black] lg:shadow-[0px_0px_6px_-1px]'
          : 'left-[-265px] lg:left-0'
      }  top-0 bg-sidebar-primary shadow-[0px_0px_6px_-1px] transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)] delay-[0s] ${
        isSideBarClosed && !isHovered ? 'w-[85px]' : 'w-[265px]'
      }`}
    >
      <header className="relative">
        <Link href={'/dashboard'}>
          <div className="flex overflow-hidden items-center">
            <Image
              src={prodoscoreLogo}
              className="w-9 my-4 ml-5"
              alt="prodoscore logo"
            />
            <Image
              src={prodoscoreWordMark}
              className={`w-[8.25rem] my-4 ml-2 h-5 ${
                isSideBarClosed && !isHovered ? 'hidden' : 'block'
              }`}
              alt="prodoscore logo"
            />
          </div>
        </Link>
        <button
          onClick={() => setIsSideBarClosed(!isSideBarClosed)}
          className="absolute -right-3 -translate-y-2/4 rotate-180 h-6 w-6 flex items-center justify-center text-[22px] cursor-pointer rounded-[50%] top-2/4 bg-white hover:bg-primary-blue
        shadow-[rgb(9_30_66_/_8%)_0px_0px_0px_1px,rgb(9_30_66_/_8%)_0px_2px_4px_1px]"
        >
          <FontAwesomeIcon
            icon={isSideBarClosed ? faAngleLeft : faAngleRight}
            color="black"
            className={'hover:text-white'}
            width="10px"
            height="10px"
          />
        </button>
      </header>

      <div
        onMouseOver={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsSideBarClosed(false)}
        className="h-[calc(100%_-_55px)] flex flex-col justify-between overflow-y-scroll menu-bar no-scrollbar mt-2"
      >
        <div>
          <ul>
            {mainMenuItems?.map((sideBarItem) => (
              <SideBarLink
                key={sideBarItem.pageName}
                isSideBarClosed={isSideBarClosed}
                isHovered={isHovered}
                isBeta={sideBarItem.isBeta}
                isExapandable={sideBarItem.isExpandable}
                pageName={sideBarItem.pageName}
                icon={sideBarItem.icon}
                link={sideBarItem.link}
              />
            ))}
          </ul>
        </div>
        <div
          className={`fixed bottom-0 pb-1 border-t border-solid border-[#313131] bg-sidebar-primary transition-all duration-200 ease-[cubic-bezier(0.2,0,0,1)] delay-[0s] ${
            isSideBarClosed && !isHovered ? 'w-[85px]' : 'w-[265px]'
          }`}
        >
          {bottomMenuItems?.map((sideBarItem) => (
            <SideBarBottomLink
              key={sideBarItem.pageName}
              isSideBarClosed={isSideBarClosed}
              isHovered={isHovered}
              pageName={sideBarItem.pageName}
              icon={sideBarItem.icon}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
