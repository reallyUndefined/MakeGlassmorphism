import { useSelector } from "react-redux";
import {
  getBlur,
  getColor,
  getOpacity,
  getSaturation,
} from "../redux/options.slice";

const SampleCard = () => {
  const bgColor = useSelector(getColor);
  const opacity = useSelector(getOpacity);
  const blur = useSelector(getBlur);
  const saturation = useSelector(getSaturation);

  return (
    <div
      className="rounded-2xl px-4 py-10 shadow-lg border-1 border-gray-500 max-w-xs mx-auto"
      style={{
        backdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
        WebkitBackdropFilter: `blur(${blur}px) saturate(${saturation}%)`,
        backgroundColor: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${opacity}%)`,
      }}
    >
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        alt="pokemon"
        className="rounded w-3/4 mx-auto mb-6 md:w-1/2"
      />
      <div className="relative bg-darkGray px-6 py-4 rounded text-lg lg:text-xl">
        {/* decos */}
        <div className="absolute top-1 left-1 rounded-full w-2 h-2 bg-kindaRed"></div>
        <div className="absolute top-1 right-1 rounded-full w-2 h-2 bg-kindaRed"></div>
        <div className="absolute bottom-1 left-1 rounded-full w-2 h-2 bg-kindaRed"></div>
        <div className="absolute bottom-1 right-1 rounded-full w-2 h-2 bg-kindaRed"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-yellow-500"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-[2px] bg-yellow-500"></div>
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-10 w-[2px] bg-yellow-500"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 h-10 w-[2px] bg-yellow-500"></div>
        {/* content */}
        <div className="grid grid-cols-2">
          <span className="font-medium">Name:</span>
          <span>Bulbasaur</span>
          <span className="font-medium">Type:</span>
          <span>Grass, Poison</span>
          <span className="font-medium">Height:</span>
          <span>2' 04"</span>
          <span className="font-medium">Weight:</span>
          <span>6.9kg</span>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
