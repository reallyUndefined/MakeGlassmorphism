import { useSelector } from "react-redux";
import {
  getBlur,
  getColor,
  getOpacity,
  getSaturation,
} from "../redux/options.slice";
import Card from "./Card";
import ClickToCopy from "./ClickToCopy";

const Output = () => {
  const blur = useSelector(getBlur);
  const bgColor = useSelector(getColor);
  const saturation = useSelector(getSaturation);
  const opacity = useSelector(getOpacity);

  const css = `
    .glass {
      background-color: rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${opacity}%);
      backdrop-filter: blur(${blur}px) saturate(${saturation}%);
      -webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);
    }
  `;

  return (
    <Card className="md:py-5">
      <div className="relative h-full px-4 py-10 bg-darkGray rounded whitespace-pre-wrap flex flex-col justify-center">
        <div className="absolute right-4 top-4">
          <ClickToCopy text={css} />
        </div>
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
