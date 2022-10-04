import { useSelector } from "react-redux";
import {
  getBlur,
  getColor,
  getOpacity,
  getSaturation,
} from "../redux/options.slice";
import Card from "./Card";

const Output = () => {
  const blur = useSelector(getBlur);
  const bgColor = useSelector(getColor);
  const saturation = useSelector(getSaturation);
  const opacity = useSelector(getOpacity);

  return (
    <Card className="md:py-5">
      <div className="h-full p-4 bg-darkGray rounded whitespace-pre-wrap flex flex-col justify-center">
        <span className="text-gray-400">{"// css for glassmorphism"}</span>
        <p className="">
          <span className="text-yellow-500">.glass</span>
          {" {"} <br />
          {"\t"}
          <span className="text-kindaRed font-medium">background-color:</span>
          &nbsp;
          <span className="">{`rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${opacity}%);`}</span>
          {"\n\t"}
          <span className="text-kindaRed font-medium">backdrop-filter:</span>
          &nbsp;
          <span className="">{`blur(${blur}px) saturate(${saturation}%);`}</span>
          {"\n\t"}
          <span className="text-kindaRed font-medium">
            -webkit-backdrop-filter:
          </span>
          &nbsp;
          <span className="">{`blur(${blur}px) saturate(${saturation}%);`}</span>
          {"\n"}
          {"}"}
        </p>
      </div>
    </Card>
  );
};

export default Output;
