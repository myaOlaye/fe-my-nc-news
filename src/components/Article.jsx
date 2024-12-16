import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { CommentsProvider } from "../contexts/CommentsContext";

export const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then(({ article }) => {
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
      <CommentsProvider>
        <Comments article_id={article_id} />
      </CommentsProvider>
    </section>
  );
};
