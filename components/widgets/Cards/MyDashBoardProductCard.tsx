import Image from 'next/image';

import { IMyProduct } from '@/interfaces/products';
import { getArrowIcon } from '@/utils/utils';

type Props = {
  product?: IMyProduct;
};

const MyDashBoardProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="card-wrap px-6 py-5 flex flex-col flex-shrink-0 w-80 gap-3">
      <div className="flex gap-2">
        {product?.product_icon && (
          <Image
            src={`/img/icons/products/${product?.product_icon}`}
            width={28}
            height={28}
            className="w-7 h-7"
            alt="logo"
          />
        )}
        <h4 className="text-base">{product?.product_name}</h4>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <h1 className="text-xl font-semibold">{product?.input}</h1>
          <p className="text-lg">{product?.product_metric}</p>
        </div>
        <div className="flex flex-col">
          {product?.input_delta?.delta &&
            product?.input_delta?.delta !== 'na' && (
              <Image
                src={getArrowIcon(product?.input_delta?.delta)}
                className="w-10 h-6"
                alt="icon"
              />
            )}
          <h3>{product?.input_delta?.percentage}</h3>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-sm">Highest</p>
        <h1 className="text-xl font-semibold text-primary-blue">
          {product?.input_extremes && product?.input_extremes.length > 0
            ? product?.input_extremes[0]
            : 'N/A'}
        </h1>
        <p className="text-sm">Lowest</p>
        <h1 className="text-xl font-semibold text-primary-red">
          {product?.input_extremes && product?.input_extremes.length > 1
            ? product?.input_extremes[1]
            : 'N/A'}
        </h1>
      </div>
    </div>
  );
};

export default MyDashBoardProductCard;
