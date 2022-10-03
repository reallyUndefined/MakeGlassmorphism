import { useState } from "react";
import { SketchPicker } from "react-color";
import { useSelector, useDispatch } from "react-redux";
import {
  changeBlur,
  changeColor,
  changeImg,
  changeOpacity,
  changeSaturation,
  getBlur,
  getColor,
  getImg,
  getOpacity,
  getSaturation,
} from "../redux/options.slice";
import Card from "./Card";
import Option from "./Option";

const Options = () => {
  const [showClrPicker, setShowClrPicker] = useState(false);

  const dispatch = useDispatch();

  const img = useSelector(getImg);
  const cardColor = useSelector(getColor);
  const blur = useSelector(getBlur);
  const opacity = useSelector(getOpacity);
  const saturation = useSelector(getSaturation);

  return (
    <Card className="flex flex-col gap-2 md:flex-row md:gap-4">
      <Option title="Background Image URL:">
        <input
          className="w-full text-gray-600 px-2"
          type="text"
          id="bg-url"
          value={img}
          onChange={(evt) => dispatch(changeImg(evt.target.value))}
        />
      </Option>
      <Option title="Card Color:" className="w-24">
        <div className="relative w-24">
          <div
            className="rounded-md p-2 bg-gray-200"
            onClick={() => setShowClrPicker((prev) => !prev)}
          >
            <div
              className="p-2 rounded"
              style={{ backgroundColor: cardColor }}
            ></div>
          </div>
          {showClrPicker && (
            <div className="absolute top-[120%] left-1/2 -translate-x-1/2">
              <SketchPicker
                className="text-gray-700"
                color={cardColor}
                onChange={(clr) => dispatch(changeColor(clr.hex))}
              />
            </div>
          )}
        </div>
      </Option>
      <Option title="Blur:">
        <input
          type="range"
          min={1}
          max={24}
          step={0.25}
          value={blur}
          onChange={(evt) => dispatch(changeBlur(evt.target.value))}
        />
      </Option>
      <Option title="Opacity:">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={opacity}
          onChange={(evt) => dispatch(changeOpacity(evt.target.value))}
        />
      </Option>
      <Option title="Staturation:">
        <input
          type="range"
          min={0}
          max={200}
          step={1}
          value={saturation}
          onChange={(evt) => dispatch(changeSaturation(evt.target.value))}
        />
      </Option>
    </Card>
  );
};

export default Options;
