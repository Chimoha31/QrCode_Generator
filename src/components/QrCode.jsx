import React from "react";

const QrCode = () => {
  
  const handleClick = () => {

  }

  return (
    <div className="bg-gray-100 rounded-r-md flex flex-col items-center justify-center py-4">
      <div>
        <img
          src="https://qrtiger.com/temp/1652088981958.png"
          alt="qr_code"
          className="w-56"
        />
        <button
          className="bg-blue-400 text-white mt-3 px-4 py-2 w-full"
          onClick={handleClick}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default QrCode;
