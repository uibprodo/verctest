import { useState } from 'react';

import Image from 'next/image';

import AuthButton from '@/components/widgets/Buttons/AuthButton/AuthButton';
import PrimaryButton from '@/components/widgets/Buttons/PrimaryButton/PrimaryButton';

import googleAuthIcon from '../public/img/icons/g-normal.png';
import msAuthIcon from '../public/img/icons/ms-normal.png';
import prodoscoreWhiteLogo from '../public/img/logos/logo-white.svg';

const Home: React.FC = () => {
  const [isError, setIserror] = useState<boolean>(false);
  return (
    <div className="bg-primary-blue flex min-h-screen flex-col items-center justify-center">
      <div className="flext justify-center items-center mb-3 w-[220px] sm:w-[300px] sm:mb-10">
        <Image src={prodoscoreWhiteLogo} alt="Prodoscore logo" />
      </div>
      <div className="bg-white flex-col flex shadow-[0_0_15px_rgb(0_0_0_/_10%)] p-6 sm:p-10 sm:w-[400px] w-[95%]">
        {isError && (
          <div className="rounded text-primary-red bg-red-100 text-center mb-5 p-2.5">
            <p>The required fields can not be empty.</p>
          </div>
        )}
        <AuthButton
          imgSrc={googleAuthIcon}
          buttonLabel="Sign in with Google"
          alt="google-icon"
        />
        <AuthButton
          imgSrc={msAuthIcon}
          buttonLabel="Sign in with Microsoft"
          alt="microsoft-icon"
        />
        <div className="mt-2 mb-4">
          <label>Username / Email:</label>
          <input
            type="text"
            className={`h-[35px] text-[#555] mb-1 mt-1 px-3 py-1.5 border-t border-solid bg-primary-background box-border w-full block text-[15px] leading-[1.42857143] font-normal border-[none] ${
              isError
                ? 'border-[solid] border-[thin] border-primary-red'
                : 'outline-none border-t-[#e2e2e2]'
            }`}
          />
        </div>
        <div className="mt-2 mb-4">
          <label>Password:</label>
          <input
            type="password"
            className={`h-[35px] text-[#555] mb-1 mt-1 px-3 py-1.5 border-t border-solid bg-primary-background box-border w-full block text-[15px] leading-[1.42857143] font-normal border-[none] ${
              isError
                ? 'border-[solid] border-[thin] border-primary-red'
                : 'outline-none border-t-[#e2e2e2]'
            }`}
          />
        </div>
        <div
          className={`flex justify-center items-center mt-2 mb-10 no-scrollbar overflow-x-scroll ${
            isError
              ? 'border-[solid] border-[thin] border-primary-red'
              : 'outline-none border-t-[#e2e2e2]'
          }`}
        ></div>
        <PrimaryButton variant="red" onClick={() => setIserror(true)}>
          Sign in
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Home;
