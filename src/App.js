import axios from "axios";
import React, { useState } from "react";
import "./App.css";
import { InputContext } from "./components/context/Context";
import Form from "./components/Form";
import QrCode from "./components/QrCode";

const App = () => {
  const [resUrl, setResUrl] = useState("");

  const [inputValue, setInputValue] = useState({
    color: "",
    url: "",
  });

// API -----------------------------------
  const config = {
    headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
  };

  const bodyParameters = {
    colorDark: inputValue.color,
    qrCategory: "url",
    text: inputValue.url,
  };

  const getQrCode = async () => {
    try {
      const res = await axios.post(
        "https://qrtiger.com/api/qr/static",
        bodyParameters,
        config
      );
      setResUrl(res.data.url)
    } catch (e) {
    } finally {
    }
  };
  // getQrCode();
// -----------------------------------------------
  const value = {
    inputValue,
    setInputValue,
    resUrl,
    getQrCode
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
