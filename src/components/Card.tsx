interface CardProps {
  className?: string;
}
const Card = ({ className, children }: React.PropsWithChildren<CardProps>) => (
  <div
    className={`border-1 border-beige/20 rounded px-4 py-5 bg-navyBlue md:px-6 md:py-4 ${className}`}
  >
    {children}
  </div>
);

export default Card;
