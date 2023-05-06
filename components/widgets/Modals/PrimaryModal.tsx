import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (_isOpen: boolean) => void;
  heading?: string;
};

const PrimaryModal: React.FC<Props> = ({
  children,
  isOpen,
  setIsOpen,
  heading,
}) => {
  return (
    <div
      className={`main-modal fixed w-full h-100 inset-0 z-[100] bg-modal-bg overflow-hidden justify-center 
    items-center ${isOpen ? 'flex' : 'hidden'}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded z-50 overflow-y-auto">
        <div className="py-[14px] px-[15px] text-left bg-primary-blue flex justify-between w-full">
          <div>
            <p className="text-white">{heading}</p>
          </div>
          <div className="pr-3">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="absolute text-white shadow-none 
         cursor-pointer p-0.5 border-[none] bg-transparent outline-none"
            >
              x
            </button>
          </div>
        </div>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export default PrimaryModal;
