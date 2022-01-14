import { Link } from "remix";
import type { ArticleType } from "~/types";

export type ArticlePropsType = {
  article: ArticleType;
};

export default function Article({ article }: ArticlePropsType) {
  return (
    <article>
      <div className="sequence-number">{article.sequenceNumber}</div>
      <div className="content">
        <div className="title">
          <a href={article.url}>
            {article.title} ({article.domain})
          </a>
        </div>
        <div className="subtitle">
          {article.user && (
            <>
              {article.points} by{" "}
              <Link to={`/user/${article.user}`}>{article.user}</Link>{" "}
            </>
          )}
          {article.time_ago}
          {article.user && (
            <>
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
