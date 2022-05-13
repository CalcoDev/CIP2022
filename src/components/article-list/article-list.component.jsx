import React, { useEffect, useState } from "react";
import Article from "../article/article.component";

export default function ArticleList() {
  const articles = [
    {
      img: "https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg",
      date: "May 12th, 2022",
      readTime: "10 min",
      title: "What does a career in programming represent?",
      description:
        "Coding is an in-demand skill used in almost every industry. Whether you envision a career as a programmer, a game developer or a data scientist, it all starts with code. Wondering if it is right for you?",
      creator: {
        img: "https://i.kym-cdn.com/photos/images/newsfeed/001/176/251/4d7.png",
        name: "ECCC Owner",
      },
      link: "articles/career-in-webdev",
      id: 1,
    },
  ];

  const [filteredArticles, setFilteredArticles] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setFilteredArticles(
      articles.filter(
        (article) =>
          article.title.toLowerCase().includes(filter) ||
          article.creator.name.toLowerCase().includes(filter)
      )
    );
  }, [filter]);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-black text-3xl font-bold">Most recent</h1>
        <div>
          <input
            type="searchbar"
            name="searchbar"
            className="rounded-full border border-gray-300 flex-1 px-4 focus:outline-none h-10 w-96"
            placeholder="Search blogs"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>

      <hr />

      <div className="mt-8 min-h-fit grid grid-cols-4 justify-center gap-5">
        {
          // Articles
          filteredArticles.map(
            ({
              img,
              date,
              readTime,
              title,
              description,
              creator,
              link,
              id,
            }) => (
              <Article
                key={id}
                img={img}
                date={date}
                readTime={readTime}
                title={title}
                description={description}
                creatorImg={creator.img}
                creatorName={creator.name}
                link={link}
              />
            )
          )
        }
      </div>
    </div>
  );
}
