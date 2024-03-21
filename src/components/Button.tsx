interface ButtonProps {
  children: React.ReactNode | string;
  className?: string;
  handler?: () => void;
  Icon?: React.ReactNode;
}

const Button = ({ children, className, handler, Icon }: ButtonProps) => {
  return (
    <button
      onClick={handler}
      className={`border py-1 px-3 rounded-full text-sm ${className}`}>
      {Icon}
      {children}
    </button>
  );
};

export default Button;
