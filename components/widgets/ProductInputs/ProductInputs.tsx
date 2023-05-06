import ProductInputRow from './ProductInputRow';

const ProductInputs: React.FC = () => {
  const apps = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <div className="card-wrap">
      <div className="flex justify-between px-5 pb-3 font-semibold text-base items-center border-b border-solid border-gray-slate-600">
        <h2>Prodoscore Inputs [Sat Mar 18 2023]</h2>
        <h2>Prodoscore: 38</h2>
      </div>
      <div className="flex">
        <ul className="flex flex-col md:flex-row md:flex-wrap w-full max-h-[280px] overflow-y-auto styled-scrollbar">
          {apps.map((product) => (
            <ProductInputRow key={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductInputs;
