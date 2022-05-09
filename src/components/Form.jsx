import React, { useContext } from "react";
import { InputContext } from "./context/Context";
import InputColor from "./InputColor";
import InputForm from "./InputForm";

const Form = () => {
  const {inputValue, getQrCode} = useContext(InputContext);

  const handleClick = () => {
    getQrCode();
  };

  return (
    <div className="grid gap-4 col-span-2 p-6">
      <InputForm />
      <InputColor />
      <button
        className="bg-blue-300 max-w-xs ml-auto px-4 py-1 text-white rounded-sm mt-4 hover:bg-blue-400 cursor-pointer"
        onClick={handleClick}
      >
        Generate QrCode
      </button>
    </div>
  );
};

export default Form;
