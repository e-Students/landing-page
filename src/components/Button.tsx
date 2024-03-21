interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | string;
  className?: string;
  handler?: () => void;
  Icon?: React.ReactNode;
}

const Button = ({ children, className, Icon, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`border py-1 px-3 rounded-full text-sm ${className}`}>
      {Icon}
      {children}
    </button>
  );
};

export default Button;
