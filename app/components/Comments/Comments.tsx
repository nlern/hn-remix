import { useState } from "react";
import { Link } from "remix";
import type { Comment } from "~/types";

type CommentProps = {
  comment: Comment;
};
export default function Comments({ comment }: CommentProps) {
  const [show, setShow] = useState(true);
  return (
    <div className="comment" style={{ padding: "1em" }}>
      <div
        className="info"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <p>
          <Link to={`/user/${comment.user}`}>{comment.user}</Link>{" "}
          {comment.time_ago}
        </p>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {show && (
        <div
          className="content"
          style={{ fontSize: "0.85rem", paddingTop: "0.5rem" }}
        >
          <div dangerouslySetInnerHTML={{ __html: comment.content }} />
          <div className="comments">
            {comment.comments.map((reply) => {
              return <Comments comment={reply} key={reply.id} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}
