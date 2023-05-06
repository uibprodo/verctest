import { type InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Toggle: React.FC<Props> = ({ name, ...props }) => {
  return (
    <div className="flex gap-1 items-center">
      <input
        type="checkbox"
        className="appearance-none w-10 focus:outline-none checked:bg-gray-slate-200 h-5 bg-gray-300 rounded-full 
      before:inline-block before:rounded-full bg-blue-300 before:bg-primary-blue before:h-5 before:w-5 checked:before:translate-x-full shadow-inner 
      transition-all duration-300 before:ml-0.5"
        {...props}
      />
      {name}
    </div>
  );
};

export default Toggle;
