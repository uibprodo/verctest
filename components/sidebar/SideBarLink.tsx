import { useRef, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SideBarLinkSubMenu from './SideBarLinkSubMenu';

type Props = {
  isSideBarClosed: boolean;
  isHovered: boolean;
  icon: any;
  pageName: string;
  link?: string;
  isBeta?: boolean;
  isExapandable?: boolean;
};

const SideBarLink: React.FC<Props> = ({
  isSideBarClosed,
  isHovered,
  pageName,
  icon,
  link,
  isBeta = false,
  isExapandable = false,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const contentElement = useRef<HTMLUListElement>(null);
  const onCollapseButtonClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setIsCollapsed(!isCollapsed);
  };

  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <li
      className={`py-[0.9rem] hover:bg-dark-hover ${
        currentRoute === link ? 'bg-dark-hover' : ''
      } transition-all duration-[0.5s] ease-[ease-in]`}
    >
      <div className="flex">
        <Link
          className={`flex ${
            isExapandable ? 'w-5/6' : 'w-full'
          } pl-5 pr-6 bg-transparent no-underline list-none transition-all duration-[0.5s] ease-[ease-in] hover:opacity-100 ${
            currentRoute === link ? 'opacity-100' : 'opacity-50'
          }`}
          href={link ? link : '#'}
        >
          <div className="flex">
            <div
              style={{ backgroundImage: `url(${icon.src})` }}
              className={`w-[30px] h-[30px] mr-2 text-xl bg-no-repeat bg-contain`}
            />
            <div className="flex justify-center items-center">
              <span
                className={`text-white h-auto ${
                  isSideBarClosed && !isHovered ? 'hidden' : 'block'
                }`}
              >
                {pageName}
                {isBeta && (
                  <small className="text-gray-slate-100 h-[50px] w-[50px] text-[8pt] relative -left-4 top-2.5 opacity-100">
                    beta
                  </small>
                )}
              </span>
            </div>
          </div>
        </Link>
        <div className={`flex items-center ${isExapandable ? 'w-1/6' : 'w-0'}`}>
          {isExapandable && !isSideBarClosed && (
            <div
              className="flex items-center h-[20px] w-[20px] cursor-pointer pr-10"
              onClick={(e) => onCollapseButtonClick(e)}
            >
              <FontAwesomeIcon
                icon={isCollapsed ? faCaretRight : faCaretDown}
                color="white"
                width="10px"
                height="10px"
              />
            </div>
          )}
        </div>
      </div>
      {isExapandable && (
        <SideBarLinkSubMenu
          contentElement={contentElement}
          isCollapsed={isCollapsed}
          isSideBarClosed={isSideBarClosed}
        />
      )}
    </li>
  );
};

export default SideBarLink;
