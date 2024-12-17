import { useEffect } from "react";
import { getComments } from "../api";
import { CommentsList } from "./CommentsList";
import { AddComment } from "./AddComment";

export const Comments = ({ article_id }) => {
  return (
    <>
      <h3>Comments</h3>
      <AddComment article_id={article_id} />
      <CommentsList article_id={article_id} />
    </>
  );
};
