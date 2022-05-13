import React from "react";
import { Link } from "react-router-dom";

export default function Article({
  img,
  date,
  readTime,
  title,
  description,
  creatorImg,
  creatorName,
  link,
}) {
  return (
    <Link
      className="flex flex-col bg-white rounded-lg shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer  whitespace-nowrap"
      to={link}
    >
      <img
        className="whitespace-normal rounded-t-lg"
        src={img}
        alt={`${title} image`}
      />
      <div className="whitespace-normal p-6 h-full flex flex-col">
        <p className="whitespace-normal text-gray-800 text-sm font-light mb-3">
          {date} · {readTime} read
        </p>
        <h1 className="whitespace-normal text-black text-lg font-bold mb-3">
          {title}
        </h1>
        <p className="whitespace-normal text-gray-800 text-sm font-light mb-4">
          {description}
        </p>
        <div className="whitespace-normal flex items-center">
          <img
            className="whitespace-normal rounded-full w-10 mr-8"
            src={creatorImg}
            alt={`${creatorName}'s profile picture`}
          />
          <p className="whitespace-normal text-gray-800 text-sm font-light">
            {creatorName}
          </p>
        </div>
      </div>
    </Link>
  );
}
