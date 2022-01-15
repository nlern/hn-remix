import { Link } from "remix";
import type { LinksFunction } from "remix";
import type { Item } from "~/types";
import Comment from "../Comment/Comment";
import stylesUrl from "./item.css";

type ItemProps = {
  item: Item;
};

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

export default function Item({ item }: ItemProps) {
  const comments = item.comments.map((comment) => {
    return <Comment key={comment.id} comment={comment} />;
  });
  return (
    <div>
      <article className="item">
        <a className="main-link" href={item.url}>
          <h1>{item.title}</h1>
          {item.domain && <small>{item.domain}</small>}
        </a>

        <p className="meta">
          {item.points} points by{" "}
          <Link to={`/user/${item.user}`} prefetch="intent">
            {item.user}
          </Link>{" "}
          {item.time_ago}
        </p>

        {item.content && (
          <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
        )}
      </article>

      <div className="comments">{comments}</div>
    </div>
  );
}
