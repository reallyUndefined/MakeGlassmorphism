import { useSelector } from "react-redux";
import { getImg } from "../redux/options.slice";
import Card from "./Card";
import SampleCard from "./SampleCard";

const Preview = () => {
  const img = useSelector(getImg);

  return (
    <Card className="md:py-6">
      <div className="relative z-0 h-full rounded-lg overflow-hidden bg-slate-500 min-h-[200px] p-8 lg:p-20">
        {img.length > 0 && (
          <img
            src={img}
            alt=""
            className="absolute -z-50 inset-0 w-full h-full object-cover"
          />
        )}
        <SampleCard />
      </div>
    </Card>
  );
};

export default Preview;
