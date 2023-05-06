import Link from 'next/link';

type Props = {
  isSideBarClosed: boolean;
  isHovered: boolean;
  icon: any;
  pageName: string;
};

const SideBarBottomLink: React.FC<Props> = ({
  isSideBarClosed,
  isHovered,
  icon,
  pageName,
}) => {
  return (
    <li
      className={`flex w-full pb-[0.4rem] hover:bg-dark-hover transition-all duration-[0.5s] ease-[ease-in]`}
    >
      <Link
        href="#"
        className="h-full bg-transparent flex items-center py-1 pl-6 w-full no-underline rounded-md list-none transition-all duration-[0.5s] ease-[ease-in] opacity-50 hover:opacity-100"
      >
        <div
          style={{ backgroundImage: `url(${icon.src})` }}
          className={`w-4 h-4 mr-2 bg-no-repeat bg-contain`}
        />
        <span
          className={`text-white ${
            isSideBarClosed && !isHovered ? 'hidden' : 'block'
          } text-sm mt-1`}
        >
          {pageName}
        </span>
      </Link>
    </li>
  );
};

export default SideBarBottomLink;
