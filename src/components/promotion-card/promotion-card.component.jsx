import React from "react";
import CustomButton from "../custom-button/custom-button.component";

export default function PromotionCard({
  billingRate,
  price,
  pricePerMonth,
  description,
  highlighted,
}) {
  return (
    <div className="hover:scale-105 active:scale-95 transition-all cursor-pointer drop-shadow-2xl-all">
      {highlighted && (
        <div className="flex justify-center items-center rounded-b-none rounded-3xl h-16 bg-blue-500 w-4/5 mx-auto">
          <h1 className="text-white text-base font-bold">
            Save 16% a year vs. monthly
          </h1>
        </div>
      )}
      <div
        className={`${
          highlighted ? "border-blue-500 border-4 rounded-t-none" : ""
        } rounded-3xl items-center p-8 flex flex-col bg-white whitespace-nowrap w-4/5 mx-auto aspect-square`}
      >
        <h1 className="whitespace-normal text-blue-500 text-xl font-bold text-center mb-4">
          {billingRate}
        </h1>
        <h1 className="whitespace-normal text-black text-4xl font-bold text-center">
          <span className="whitespace-normal text-gray-600 text-xl leading-none font-semibold align-top">
            $
          </span>
          {price}
        </h1>

        <hr className="whitespace-normal mt-12 mb-6 w-1/12 h-1 bg-gray-300 rounded-xl" />

        <p className="whitespace-normal text-center text-gray-500 text-lg font-normal mb-3">
          {description}
        </p>

        <CustomButton
          text="START LEARNING"
          className="whitespace-normal w-full h-16 mt-auto"
          highlighted={highlighted}
        />
      </div>
    </div>
  );
}
