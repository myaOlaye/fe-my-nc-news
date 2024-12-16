import { useContext, useState, useEffect } from "react";
import { CommentsContext } from "../contexts/CommentsContext";
import { getComments } from "../api";
import { Comment } from "./Comment";

export const CommentsList = ({ article_id }) => {
  console.log();
  const { comments, setComments } = useContext(CommentsContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then(({ comments }) => {
        setComments(comments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h3>Comments</h3>
      {comments.map((comment) => {
        return <Comment key={comment.comment_id} comment={comment} />;
      })}
    </>
  );
};
