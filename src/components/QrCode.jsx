import React, { useContext } from "react";
import { saveAs } from "file-saver";
import { InputContext } from "./context/Context";

const QrCode = () => {
  const { resUrl, loading, error } = useContext(InputContext);

  const handleClick = () => {
    saveAs(resUrl, "qrCode.png");
  };

  if (loading) {
    return (
      <div className="animate-pulse flex flex-col justify-center items-center gap-3 px-10">
        <div className="h-32 bg-gray-300 w-full"></div>
        <div className="h-8 bg-gray-300 w-full"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-gray-500 flex items-center">
        Sorry, something went wrong. Try again!
      </div>
    );
  }

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4">
      {resUrl ? (
        <div>
          <img src={resUrl} alt="qr_code" className="w-56" />
          <button
            className="bg-blue-400 text-white mt-3 px-4 py-2 w-full"
            onClick={handleClick}
          >
            Download
          </button>
        </div>
      ) : (
        <div>QrCode will showing here</div>
      )}
    </div>
  );
};

export default QrCode;
