import { useEffect } from "react";
import { getComments } from "../api";
import { CommentsList } from "./CommentsList";

export const Comments = ({ article_id }) => {
  return <CommentsList article_id={article_id} />;
};
