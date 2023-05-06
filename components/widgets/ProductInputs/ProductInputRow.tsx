import { useState } from 'react';

import PrimaryModal from '../Modals/PrimaryModal';

const ProductInputRow: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <li
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full flex-[100%] md:flex-[50%] justify-between px-6 py-3 border-b border-solid border-gray-slate-600"
      >
        <div className="flex gap-5 items-center">
          <div className="icon-docs w-[35px] h-[35px] bg-contain m-1" />
          <h3 className="font-semibold text-base">Google Drive activities</h3>
        </div>
        <div className="flex items-center">
          <h3 className="font-semibold text-base">0</h3>
        </div>
      </li>
      <PrimaryModal
        heading="Document Types"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <div />
      </PrimaryModal>
    </>
  );
};

export default ProductInputRow;
