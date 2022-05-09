import React from "react";
import InputColor from "./InputColor";
import InputForm from "./InputForm";

const Form = () => {
  
  const handleClick= () => {

  }

  return (
    <div className="grid gap-4 col-span-2 p-6">
      <InputForm />
      <InputColor />
      <button
        className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded-sm max-w-sm ml-auto"
        onClick={handleClick}
      >
        Generate QrCode
      </button>
    </div>
  );
};

export default Form;
