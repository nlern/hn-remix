import { ArticleResponseType } from "./article-response.type";

export type ArticleType = Pick<
  ArticleResponseType,
  | "id"
  | "url"
  | "title"
  | "domain"
  | "points"
  | "user"
  | "time_ago"
  | "comments_count"
> & {
  sequenceNumber: number;
};
