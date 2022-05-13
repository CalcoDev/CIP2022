import React from "react";

import Days from "../../assets/30days.svg";

export default function MoneyBack({ className }) {
  return (
    <div className={`w-2/5 mx-auto flex mt-16 ${className}`}>
      <img className="mr-8" src={Days} alt="30 Days money back guarantee" />
      <div className="flex flex-col justify-between">
        <p className="text-gray-500 text-lg font-bold">100% RISK FREE</p>
        <h1 className="text-black text-xl font-bold">
          We can't say for certain you'll like ECCC. That's why we provide a no
          hassle, 30-day money back guarantee.
        </h1>
      </div>
    </div>
  );
}
