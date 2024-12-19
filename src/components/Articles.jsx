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
      <h2>All Articles</h2>
      <ArticleFilter
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <ArticleList topic="" searchParams={searchParams} />
    </section>
  );
};
