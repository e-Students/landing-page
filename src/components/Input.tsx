import clsx from 'clsx';

import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

interface InputProps {
  id: string;
  type?: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  disable?: boolean;
  placeholder?: string;
  className?: string;
  containerStyle?: string;
}

export const Input = ({
  id,
  type = 'text',
  label,
  register,
  errors,
  required = false,
  disable = false,
  placeholder,
  className,
  containerStyle,
}: InputProps) => {
  return (
    <div className={containerStyle}>
      <label
        htmlFor={id}
        className='block text-sm font-medium leading-6 text-gray-900'>
        {label}
      </label>
      <div className='mt-2'>
        <input
          placeholder={placeholder}
          type={type}
          id={id}
          disabled={disable}
          autoComplete={id}
          {...register(id, { required })}
          className={clsx(
            `form-input
          block w-full rounded-md py-1.5 px-2 text-gray-900 border-0 shadow-sm ring-1 ring-inset
           ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
            focus:ring-sky-600 sm:text-sm sm:leading-6 ${className}`,
            errors[id] && 'focus:ring-rose-500',
            disable && 'opacity-50 cursor-default'
          )}
        />
      </div>
    </div>
  );
};
