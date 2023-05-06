import { type ButtonHTMLAttributes, type ReactNode } from 'react';

import clsx from 'clsx';

type buttonVariant = 'regular' | 'white' | 'red';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant;
  children: ReactNode;
}

const PrimaryButton: React.FC<Props> = ({
  variant = 'regular',
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'box-border cursor-pointer whitespace-nowrap select-none appearance-none text-sm text-center transition-[0.25s] duration-[ease] ease-[all] no-underline px-[18px] py-2.5 rounded-[3px] border-[none]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        variant === 'regular' &&
          'bg-primary-blue text-white active:opacity-100 hover:opacity-80',
        variant === 'white' &&
          'bg-white text-primary-blue active:opacity-100 hover:opacity-80',
        variant === 'red' &&
          'bg-primary-red text-white active:opacity-100 hover:opacity-80'
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
