import { useState } from "react";
import { Link } from "remix";
import type { LinksFunction } from "remix";
import type { Comment as CommentType } from "~/types";
import stylesUrl from "./comment.css";

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

type CommentProps = {
  comment: CommentType;
};

export default function Comment({ comment }: CommentProps) {
  const [hidden, hide] = useState(false);
  return (
    <>
      {!comment.deleted && (
        <article className="comment">
          <div
            className={`meta-bar ${hidden ? "hidden" : ""}`}
            onClick={() => hide(!hidden)}
          >
            <span className="meta">
              <Link to={`/user/${comment.user}`}>{comment.user}</Link>{" "}
              {comment.time_ago}
            </span>
          </div>

          <div
            className="body"
            dangerouslySetInnerHTML={{ __html: comment.content }}
          ></div>

          {!hidden && comment.comments.length > 0 && (
            <ul className="children">
              {comment.comments.map((c) => (
                <li key={c.id}>
                  <Comment comment={c} />
                </li>
              ))}
            </ul>
          )}
        </article>
      )}
    </>
  );
}
