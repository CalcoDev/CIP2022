import React, { useState } from "react";
import ArticleList from "../../components/article-list/article-list.component";
import CustomButton from "../../components/custom-button/custom-button.component";

export default function Blog() {
  const [email, setEmail] = useState("");

  const [searchString, setSearchString] = useState("");

  return (
    <div className="flex flex-col w-3/4 mx-auto pt-24">
      {/* Header */}
      <div className="flex mb-16">
        {/* Header */}
        <div className="w-2/5 mr-24">
          <h1 className="text-black text-6xl font-bold">ECCC Blog</h1>
          <p className="mt-8 text-2xl font-light text-gray-700">
            Free posts, guides, tutorials, and newsletters to help you learn
            in-demand skills, get hired, and advance your career.
          </p>
        </div>

        {/* Newsletter ad */}
        <div className="w-3/5 shadow-2xl rounded-lg p-6 ml-32 mr-4">
          <h1 className="text-black text-xl font-semibold mb-8">
            Don't miss out on the fastest growing monthly newsletters for tech
            professionals 👇
          </h1>
          <div className="flex h-12 mb-4">
            <input
              type="email"
              name="email"
              className="rounded-full border border-gray-300 flex-1 px-4 focus:outline-none"
              placeholder="Email"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomButton
              highlighted={true}
              text="SUBSCRIBE"
              className="w-64"
            />
          </div>
          <span className="text-gray-800 text-sm font-light">
            Join 100,000+ tech professionals. Unsubscribe anytime.
          </span>
        </div>
      </div>

      {/* Articles */}
      <ArticleList />
    </div>
  );
}
