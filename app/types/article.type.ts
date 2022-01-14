import { ArticleResponseType } from "./article-response.type";

export type ArticleType = ArticleResponseType & {
  sequenceNumber: number;
};
