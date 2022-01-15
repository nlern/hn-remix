import { Link } from "remix";
import type { Item } from "~/types";
import Comments from "../Comments/Comments";

type ItemProps = {
  item: Item;
};

export default function Item({ item }: ItemProps) {
  const comments = item.comments.map((comment) => {
    return <Comments key={comment.id} comment={comment} />;
  });
  return (
    <div className="item">
      <h1 className="header">{item.title}</h1>
      <small className="subheader">
        <a href={item.url} className="link">
          {item.domain}
        </a>
      </small>
      <p className="info">
        {item.points} by{" "}
        <Link to={`/user/${item.user}`} prefetch="intent">
          {item.user}
        </Link>{" "}
        {item.time_ago}
      </p>
      <div className="comments">{comments}</div>
    </div>
  );
}
