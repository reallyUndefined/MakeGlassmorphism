interface OptionProps {
  title: string;
  className?: string;
}
const Option = ({
  title,
  className,
  children,
}: React.PropsWithChildren<OptionProps>) => {
  return (
    <div className={`grid gap-1 w-full ${className}`}>
      <label>{title}</label>
      {children}
    </div>
  );
};

export default Option;
