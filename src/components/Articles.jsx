import { ArticleList } from "./ArticleList";
import { Topics } from "./Topics";

export const Articles = () => {
  return (
    <section>
      <Topics />
      <h2>All Articles</h2>
      <ArticleList topic="" />
    </section>
  );
};
