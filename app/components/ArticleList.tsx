import type { ArticleType } from "~/types";
import Article from "./Article";

export type ArticleListPropsType = {
  articles: ArticleType[];
};
export default function ArticleList({ articles }: ArticleListPropsType) {
  return (
    <>
      {articles.map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </>
  );
}
