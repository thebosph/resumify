import { Path, UseFormRegister } from "react-hook-form";
import { ResumeInputs } from "../../store/storeTypes";

interface InputProps {
  labelName: string;
  label: Path<ResumeInputs>;
  register: UseFormRegister<ResumeInputs>;
  required?: boolean;
  disabled?: boolean;
  defaultValue?: number;
}

const Input = ({
  labelName,
  label,
  register,
  required,
  disabled,
  defaultValue,
}: InputProps) => {
  return (
    <div className="flex flex-col shadow-lg space-y-2 py-2 p-2  rounded-md ">
      <input
        defaultValue={defaultValue}
        {...register(label, { required })}
        className="py-2 px-1 bg-niteBlueDark text-white focus:border-0 rounded-md disabled:bg-slate-200 disabled:cursor-not-allowed  placeholder:text-slate-600 placeholder:p-2"
        disabled={disabled}
        placeholder={labelName}
      />
    </div>
  );
};

export default Input;
