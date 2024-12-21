import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { useEffect, useState } from "react";
import { Comments } from "./Comments";
import { CommentsProvider } from "../contexts/CommentsContext";
import { CommentFeedbackProvider } from "../contexts/CommentFeedbackContext";
import { Votes } from "./Votes";
import { Spinner } from "react-bootstrap";

export const Article = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getArticle(article_id)
      .then(({ article }) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <section>
      {isLoading ? (
        <Spinner
          animation="border"
          variant="primary"
          style={{ width: "3rem", height: "3rem", marginTop: "2rem" }}
        />
      ) : isError ? (
        <p>404: Article does not exist</p>
      ) : (
        <>
          {" "}
          <h2>{article.title}</h2>
          <p>
            by {article.author} on{" "}
            {new Date(article.created_at).toLocaleDateString()}
          </p>
          <img src={article.article_img_url} className="mb-4" />
          <p style={{ textAlign: "left" }} className="m-3">
            {article.body}
          </p>
          <Votes
            article_id={article_id}
            votes={article.votes}
            setArticle={setArticle}
          />
          <CommentsProvider>
            <CommentFeedbackProvider>
              <Comments article_id={article_id} />
            </CommentFeedbackProvider>
          </CommentsProvider>
        </>
      )}
    </section>
  );
};
