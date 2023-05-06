type Props = {
  isHamburgerIconClicked: boolean;
  setIsHamburgerIconClicked: (_isHamburgerIconClicked: boolean) => void;
};

const HamBurgerButton: React.FC<Props> = ({
  setIsHamburgerIconClicked,
  isHamburgerIconClicked,
}) => {
  return (
    <label
      className="cursor-pointer lg:hidden block"
      onClick={() => setIsHamburgerIconClicked(!isHamburgerIconClicked)}
    >
      <svg
        className="fill-current text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
  );
};

export default HamBurgerButton;
