import { RefObject } from 'react';

type Props = {
  contentElement: RefObject<HTMLUListElement>;
  isCollapsed: boolean;
  isSideBarClosed: boolean;
};
const SideBarLinkSubMenu: React.FC<Props> = ({
  contentElement,
  isCollapsed,
  isSideBarClosed,
}) => {
  return (
    <ul
      ref={contentElement}
      style={{
        height:
          !isCollapsed && !isSideBarClosed
            ? `${contentElement.current?.scrollHeight}px`
            : '0px',
      }}
      className={`
   text-white transition-all duration-[0.5s] ease-[ease-in] overflow-hidden text-sm pl-14`}
    >
      <li className="mb-1 mt-2">One</li>
      <li className="mb-1 mt-2">Two</li>
    </ul>
  );
};

export default SideBarLinkSubMenu;
