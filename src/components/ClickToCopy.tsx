import { MdOutlineContentCopy } from "react-icons/md";

interface ClickToCopyProps {
  text: string;
}
const ClickToCopy = ({ text }: ClickToCopyProps) => {
  return (
    <button
      className="border-2 border-navyBlue rounded p-2 text-navyBlue hover:text-beige hover:bg-navyBlue hover:border-beige transition duration-200 ease-out"
      aria-label="copy"
      onClick={() => navigator.clipboard.writeText(text)}
    >
      <MdOutlineContentCopy size={20} />
    </button>
  );
};

export default ClickToCopy;
