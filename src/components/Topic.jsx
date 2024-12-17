import { useParams } from "react-router-dom";
import { ArticleList } from "./ArticleList";

export const Topic = () => {
  const { topic } = useParams();

  return (
    <>
      <h2>{topic} Articles</h2>
      <ArticleList topic={topic} />
    </>
  );
};
