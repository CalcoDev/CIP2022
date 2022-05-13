import React from "react";
import { Link } from "react-router-dom";

/*

    {
      creator: {
        img: "",
        name: "",
        title: "",
      },
      img: "",
      text: "",
    },

*/

export default function Testimonial({ creator, img, text }) {
  return (
    <div className="h-full p-6 flex flex-col items-center bg-white rounded-lg shadow-2xl hover:scale-105 active:scale-95 transition-all  whitespace-nowrap">
      <img
        className="whitespace-normal rounded-full h-24 w-24"
        src={creator.img}
        alt="Creator photo"
      />

      <div className="h-full whitespace-normal flex flex-col items-center">
        <h1 className="whitespace-normal text-gray-800 text-lg font-semibold mb-3">
          {creator.name}
        </h1>
        <h2 className="whitespace-normal text-gray-800 text-base font-light mb-6">
          {creator.title}
        </h2>

        <img
          className="whitespace-normal mb-6 w-2/3"
          src={img}
          alt="Company banner"
        />

        <p className="whitespace-normal text-gray-800 text-base font-light mb-3">
          {text}
        </p>

        <div className="whitespace-normal flex">
          <a href="https://www.linkedin.com/">
            <img
              className="whitespace-normal w-8 h-8 mx-4 cursor-pointer"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            />
          </a>

          <a className="mt-auto" href="https://github.com/">
            <img
              className="whitespace-normal w-8 h-8 mx-4 cursor-pointer"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
