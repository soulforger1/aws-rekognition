type buttonType = {
  className?: string;
  children?: any;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button = (props: buttonType) => {
  const { className, children, ...others } = props;

  return (
    <button className={`btn ${className}`} {...others}>
      {children}
    </button>
  );
};
