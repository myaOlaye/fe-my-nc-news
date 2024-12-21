import { useParams, useSearchParams } from "react-router-dom";
import { ArticleList } from "./ArticleList";
import { ArticleFilter } from "./ArticleFilter";

export const Topic = () => {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order: "desc",
  });

  return (
    <>
      <h2 style={{ margin: "1rem" }}>{topic} Articles</h2>
      <ArticleFilter
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      <ArticleList topic={topic} searchParams={searchParams} />
    </>
  );
};
