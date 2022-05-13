import React from "react";

export default function CustomButton({
  text,
  onClickHandle,
  className,
  highlighted,
}) {
  return (
    <button
      className={`${className} text-center cursor-pointer mx-6 font-medium tracking-normal  rounded-full ${
        highlighted === true
          ? "text-gray-100 bg-blue-500 border-blue-500 border-2 hover:bg-blue-600"
          : "text-blue-500 bg-white border-blue-500 border-2 hover:bg-blue-500 hover:text-white"
      } px-10 py-3`}
      onClick={onClickHandle}
    >
      {text}
    </button>
  );
}
