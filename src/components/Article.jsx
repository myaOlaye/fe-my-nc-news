import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { useEffect, useState } from "react";

export const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id, title } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id, title).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, []);

  return (
    <section>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {" "}
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.created_at}</p>
          <p>Topic: {article.topic}</p>
          <p>{article.body}</p>{" "}
        </>
      )}
    </section>
  );
};
