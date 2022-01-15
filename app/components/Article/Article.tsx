import { Link } from "remix";
import type { LinksFunction } from "remix";
import type { ArticleType } from "~/types";
import stylesUrl from "./article.css";

export type ArticlePropsType = {
  article: ArticleType;
};

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

export default function Article({ article }: ArticlePropsType) {
  return (
    <article className="article">
      <div className="sequence-number">{article.sequenceNumber}</div>
      <div className="content">
        <div className="header">
          {article.type === "link" || article.type === "job" ? (
            <>
              <a href={article.url} className="link title">
                {article.title}
              </a>
              {article.domain && (
                <span>
                  (
                  <a href={article.url} className="link domain">
                    {article.domain}
                  </a>
                  )
                </span>
              )}
            </>
          ) : (
            <Link
              prefetch="intent"
              to={`./${article.type}/${article.url}`}
              className="link title"
            >
              {article.title}
            </Link>
          )}
        </div>
        <div className="subheader">
          {article.user && (
            <>
              {article.points} by{" "}
              <Link to={`/user/${article.user}`}>{article.user}</Link>{" "}
            </>
          )}
          {article.time_ago}
          {article.comments_count > 0 && (
            <>
              {" "}
              |{" "}
              <Link to={`/item/${article.id}`}>
                {article.comments_count} comments
              </Link>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
