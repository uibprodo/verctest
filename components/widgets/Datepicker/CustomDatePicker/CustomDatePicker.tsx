import { forwardRef } from 'react';
//@ts-ignore
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  selected: Date;
  onChange: (_date: Date) => void;
  className: string;
};
type ButtonProps = React.HTMLProps<HTMLButtonElement>;

const CustomDatePicker: React.FC<Props> = ({
  selected,
  onChange,
  className,
}) => {
  const CustomDateInput = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ value, onClick }, ref) => (
      <button className={className} onClick={onClick} ref={ref}>
        {value}
      </button>
    )
  );
  CustomDateInput.displayName = 'CustomDateInput';
  return (
    <DatePicker
      selected={selected}
      onChange={(date: Date) => onChange(date)}
      customInput={<CustomDateInput />}
    />
  );
};

export default CustomDatePicker;
