import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../api";
import { ArticleCard } from "./ArticleCard";
import { Spinner } from "react-bootstrap";

export const ArticleList = ({ topic, searchParams }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    getArticles(topic, searchParams)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);

        console.log(err, "<--err msg");
      });
  }, [searchParams]);

  return (
    <>
      {isLoading ? (
        <Spinner
          animation="border"
          variant="primary"
          style={{ width: "3rem", height: "3rem", marginTop: "2rem" }}
        />
      ) : isError ? (
        <p>404: Topic not found</p>
      ) : (
        articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })
      )}
    </>
  );
};
