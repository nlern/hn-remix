import { Link } from "remix";
import type { LinksFunction } from "remix";
import type { ArticleResponseType } from "~/types";
import stylesUrl from "./article.css";

export type ArticlePropsType = {
  article: ArticleResponseType;
  index: number;
};

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

export default function Article({ article: item, index }: ArticlePropsType) {
  return (
    <article>
      <h2>
        {item.domain ? (
          <a href={item.url}>
            {item.title} {item.domain && <small>({item.domain})</small>}
          </a>
        ) : (
          <Link to={`/item/${item.id}`} prefetch="intent">
            {item.title} {item.domain && <small>({item.domain})</small>}
          </Link>
        )}
      </h2>

      {item.type === "job" ? (
        <p>{item.time_ago}</p>
      ) : (
        <p>
          {item.points} points by{" "}
          <Link prefetch="intent" to={`/user/${item.user}`}>
            {item.user}
          </Link>{" "}
          {item.time_ago}|{" "}
          <Link prefetch="intent" to={`/item/${item.id}`}>
            {item.comments_count}{" "}
            {item.comments_count === 1 ? "comment" : "comments"}
          </Link>
        </p>
      )}

      <span className="index">{index}</span>
    </article>
  );
}
