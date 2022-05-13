import React from "react";

export default function MembershipPerk({ text }) {
  return (
    <div className="flex">
      <div className="w-1/12">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="15" fill="#3b82f6"></circle>
          <path
            d="M23.8633 8.30653C24.2463 8.70445 24.2342 9.3375 23.8363 9.72049L11.5914 21.5062C11.2042 21.8789 10.5917 21.8789 10.2045 21.5062L5.30653 16.7919C4.90862 16.4089 4.89652 15.7759 5.27951 15.378C5.66251 14.98 6.29556 14.968 6.69347 15.3509L10.898 19.3978L22.4494 8.27951C22.8473 7.89652 23.4804 7.90862 23.8633 8.30653Z"
            fill="white"
          ></path>
        </svg>
      </div>

      <p className="flex-1 text-gray-500 text-lg font-normal mb-3">{text}</p>
    </div>
  );
}
