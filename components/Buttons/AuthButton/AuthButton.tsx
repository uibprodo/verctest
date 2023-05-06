import Image from 'next/image';

type Props = {
  imgSrc: any;
  buttonLabel: string;
  alt: string;
  onClick?: () => void;
};

const AuthButton: React.FC<Props> = ({ imgSrc, buttonLabel, alt }) => {
  return (
    <div className="flex min-w-full justify-center items-center cursor-pointer w-full p-0.5 bg-white text-[#303030] border border-solid border-[#D0D0D0] max-w-[300px] rounded-[3px] mb-5">
      <Image src={imgSrc} alt={alt} className="mr-1" />
      <p className="text-sm">{buttonLabel}</p>
    </div>
  );
};

export default AuthButton;
