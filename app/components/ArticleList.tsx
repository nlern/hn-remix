import type { ArticleResponseType } from "~/types";
import Article from "./Article/Article";

export type ArticleListPropsType = {
  articles: ArticleResponseType[];
  start: number;
};
export default function ArticleList({ articles, start }: ArticleListPropsType) {
  return (
    <>
      {articles.map((article, index) => {
        return (
          <Article key={article.id} article={article} index={start + index} />
        );
      })}
    </>
  );
}
