import { ArticleList } from "./ArticleList";
import { Topics } from "./Topics";
import { ArticleFilter } from "./ArticleFilter";
import { useSearchParams } from "react-router-dom";

export const Articles = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    sort_by: "created_at",
    order: "desc",
  });

  return (
    <section>
      <Topics />
      <hr></hr>
      <h2 style={{ margin: "1rem" }}>All Articles</h2>
      <ArticleFilter
        className="article-filter"
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ArticleList topic="" searchParams={searchParams} />
    </section>
  );
};
