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
      className="rounded-2xl px-4 py-10"
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
      <div className="max-w-fit mx-auto text-lg lg:text-xl">
        <p className="textShadow">
          <span className="font-medium">Name:&nbsp;</span>Bulbasaur
        </p>
        <p className="textShadow">
          <span className="font-medium">Type:&nbsp;</span>Grass, Poison
        </p>
        <p className="textShadow">
          <span className="font-medium">Height:&nbsp;</span>2' 04"
        </p>
        <p className="textShadow">
          <span className="font-medium">Weight:&nbsp;</span>6.9kg
        </p>
      </div>
    </div>
  );
};

export default SampleCard;
