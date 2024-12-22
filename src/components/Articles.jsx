import { ArticleList } from "./ArticleList";
import { Topics } from "./Topics";
import { ArticleFilter } from "./ArticleFilter";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Articles = () => {
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order: "desc",
  });

  return (
    <section>
      {topic ? null : <Topics />}
      <hr></hr>
      <h2 style={{ margin: "1rem" }}>{topic} Articles</h2>
      <ArticleFilter
        className="article-filter"
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ArticleList topic={topic ? topic : ""} searchParams={searchParams} />
    </section>
  );
};
