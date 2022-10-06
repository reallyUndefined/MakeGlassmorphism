import { useSelector } from "react-redux";
import {
  getBlur,
  getColor,
  getImg,
  getOpacity,
  getSaturation,
} from "../redux/options.slice";
import Card from "./Card";
import ClickToCopy from "./ClickToCopy";

const Output = () => {
  const img = useSelector(getImg);
  const blur = useSelector(getBlur);
  const bgColor = useSelector(getColor);
  const saturation = useSelector(getSaturation);
  const opacity = useSelector(getOpacity);

  const cssGlass = `
    .glass {
      background-color: rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${opacity}%);
      backdrop-filter: blur(${blur}px) saturate(${saturation}%);
      -webkit-backdrop-filter: blur(${blur}px) saturate(${saturation}%);
    }
  `;

  const cssBg = `
    .bg {
      background-color: rgb(100, 116, 139);
      ${img.length > 0 ? `background-image: url(${img});` : ""}
      background-position: center;
      background-size: cover;
    }
  `;

  return (
    <Card className="md:py-5 flex flex-col gap-4">
      <div className="rounded bg-darkGray px-4 py-2 text-xl">
        CSS for Glassmorphism
      </div>
      <div className="px-4 py-5 bg-darkGray rounded whitespace-pre-wrap h-full flex flex-col gap-3 justify-center">
        <div className="relative w-full">
          <div className="absolute right-0 top-0">
            <ClickToCopy text={cssGlass} />
          </div>
          <span className="text-gray-400">{"// css for glassmorphism"}</span>
          <p className="text-base lg:text-lg">
            <span className="text-yellow-500">.glass</span>
            {" {"} <br />
            <CssProperty
              name="background-color:"
              value={`rgb(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${opacity}%);`}
            />
            <CssProperty
              name="backdrop-filter:"
              value={`blur(${blur}px) saturate(${saturation}%);`}
            />
            <CssProperty
              name="-webkit-backdrop-filter:"
              value={`blur(${blur}px) saturate(${saturation}%);`}
            />
            {"}"}
          </p>
        </div>
        <div className="relative w-full">
          <div className="absolute right-0 top-0">
            <ClickToCopy text={cssBg} />
          </div>
          <span className="text-gray-400">{"// css for background"}</span>
          <p className="text-base lg:text-lg">
            <span className="text-yellow-500">.bg</span>
            {" {"} <br />
            <CssProperty name="background-color:" value="rgb(100, 116, 139);" />
            {img.length > 0 && (
              <CssProperty name="background-image:" value={`url(${img});`} />
            )}
            <CssProperty name="background-position:" value="center;" />
            <CssProperty name="background-size:" value="cover;" />
            {"}"}
          </p>
        </div>
      </div>
    </Card>
  );
};

interface CssPropertyProps {
  name: string;
  value: string;
}
const CssProperty = ({ name, value }: CssPropertyProps) => (
  <>
    {"\t"}
    <span className="text-kindaRed font-medium">{name}</span>
    &nbsp;
    <span className="break-all">{value}</span>
    {"\n"}
  </>
);

export default Output;
