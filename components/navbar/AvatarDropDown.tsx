import React, { useState } from 'react';

const AvatarDropDown = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <div className="relative flex items-center text-left">
      <div
        className="inline-flex justify-center w-[35px] h-[35px] rounded-full px-4 py-2 text-sm cursor-pointer transition duration-150 ease-in-out bg-primary-blue"
        onClick={() => setOpen(!isOpen)}
      ></div>
      <div
        className={`${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } transition-all duration-300 transform origin-top-right -translate-y-2 scale-95`}
      >
        <div className="absolute flex flex-col right-0 top-10 mt-2 origin-top-right bg-white shadow-[0_0px_8px_-3px_#163954] divide-y divide-gray-100">
          <div className="flex">
            <div className="bg-primary-blue rounded-full w-[88px] h-[88px] m-5"></div>
            <div className="flex items-center mr-5">
              <div>
                <h4 className="text-base">Dason Prodmite</h4>
                <h6 className="text-xs">dason@prodmite.com</h6>
                <h6 className="text-xs">prodmite.com</h6>
              </div>
            </div>
          </div>
          <div className="py-3 flex bg-primary-background justify-around">
            <button className="border text-black cursor-pointer text-[15px] no-underline px-3 py-1.5 rounded-[5px] border-solid border-gray-slate-200 bg-gray-slate-300 hover:shadow-[0_1px_1px_rgb(0_0_0_/_10%)] hover:bg-gray-slate-400">
              My Dashboard
            </button>
            <button className="border text-black cursor-pointer text-[15px] no-underline px-3 py-1.5 rounded-[5px] border-solid border-gray-slate-200 bg-gray-slate-300 hover:shadow-[0_1px_1px_rgb(0_0_0_/_10%)] hover:bg-gray-slate-400">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarDropDown;
