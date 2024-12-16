import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles()
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h2>All Articles</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      )}
    </>
  );
};
