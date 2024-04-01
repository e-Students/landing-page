interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  handler?: () => void;
  Icon?: React.ReactNode;
  showIcon?: boolean;
  iconClassName?: string;
}

const Button = ({
  children,
  className,
  Icon,
  showIcon,
  iconClassName,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`border py-1 px-3 rounded-full text-sm flex items-center justify-center gap-3 ${className}`}>
      <div className={`${iconClassName}`}> {showIcon && Icon}</div>

      {children}
    </button>
  );
};

export default Button;
