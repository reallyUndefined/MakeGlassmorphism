import { useState } from "react";
import { SketchPicker } from "react-color";
import Option from "./Option";

const Options = () => {
  const [showClrPicker, setShowClrPicker] = useState(false);
  const [cardColor, setCardColor] = useState("#4545ab");

  return (
    <div className="border-1 border-beige/20 rounded px-4 py-5 bg-navyBlue flex flex-col gap-2 md:flex-row md:gap-4 md:px-6 md:py-4">
      <Option title="Background Image URL:">
        <input className="w-full" type="text" id="bg-url" />
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
                onChange={(clr) => setCardColor(clr.hex)}
              />
            </div>
          )}
        </div>
      </Option>
      <Option title="Blur:">
        <input type="range" min={1} max={24} step={0.25} value={12} />
      </Option>
      <Option title="Opacity:">
        <input type="range" min={0} max={100} step={1} value={25} />
      </Option>
      <Option title="Staturation:">
        <input type="range" min={0} max={200} step={1} value={120} />
      </Option>
    </div>
  );
};

export default Options;
