import React, { useContext } from "react";
import { InputContext } from "./context/Context";

const InputForm = () => {
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, url: e.target.value });
  };

  return (
    <div>
      <label>URL</label>
      <input
        type="url"
        className="border-2 w-full py-1 px-3"
        placeholder="https://ezample.com"
        value={inputValue.url}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputForm;
