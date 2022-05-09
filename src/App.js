import React, { useState } from "react";
import "./App.css";
import { InputContext } from "./components/context/Context";
import Form from "./components/Form";
import QrCode from "./components/QrCode";

const App = () => {
  const [inputValue, setInputValue] = useState({
    url: "",
    color: "",
  });

  const value = {
    inputValue,
    setInputValue,
  };

  return (
    <div className="base_background1 flex flex-col justify-center items-center">
      <div className="container max-auto max-w-4xl bg-white rounded-md shadow-lg shadow-gray-700">
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
            <Form />
            <QrCode />
          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
