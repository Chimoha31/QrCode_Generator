import React, { useContext, useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { InputContext } from "./context/Context";

const InputColor = () => {
  const [color, setColor] = useState("#000000");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const { inputValue, setInputValue } = useContext(InputContext);

  useEffect(() => {
    setInputValue({ ...inputValue, color: color });
    // eslint-disable-next-line
  }, [color]);

  const handleChange = (e) => {
    setColor(e.hex);
  };

  return (
    <div>
      <label className="font-semihold text-md">Color</label>

      <div className="flex items-center gap-2">
        <div
          className="w-10 h-8 cursor-pointer border-4"
          style={{ backgroundColor: color }}
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
        ></div>
        <span>{color}</span>
      </div>

      {displayColorPicker && (
        <div className="absolute mt-2">
          <ChromePicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};

export default InputColor;
