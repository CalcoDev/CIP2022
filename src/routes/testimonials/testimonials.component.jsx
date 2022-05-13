import React from "react";
import ArticleList from "../../components/article-list/article-list.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import TestimonialList from "../../components/testimonial-list/testimonial-list.component";

export default function Testimonials() {
  return (
    <div className="flex flex-col w-3/4 mx-auto pt-24">
      {/* Header */}
      <div className="flex mb-16">
        {/* Header */}
        <div className="w-4/6 mr-24">
          <h1 className="text-black text-6xl font-bold">
            ECCC Student Testimonials
          </h1>
          <p className="mt-8 text-2xl font-light text-gray-700">
            Nothing makes us happier than the success of our students. These are
            just a few of the thousands of success stories from real students
            who are now working at world-class companies around the world.
          </p>
        </div>

        {/* Newsletter ad */}
        <div className="w-2/6 shadow-2xl rounded-lg p-6 ml-32 mr-4 flex flex-col items-center">
          <h1 className="text-black text-xl font-semibold mb-8">
            Join ECCC and you will be next 👇
          </h1>
          <div className="flex h-12 mb-4">
            <CustomButton text="SUBSCRIBE" className="w-64" />
          </div>
        </div>
      </div>

      <hr className="mb-16" />

      <div className="flex flex-col items-center">
        <h1 className="text-black text-4xl font-bold mb-8">
          ECCC students get hired.
        </h1>

        <TestimonialList />
      </div>
    </div>
  );
}
