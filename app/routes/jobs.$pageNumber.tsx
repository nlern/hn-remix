import { Link, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";

import type { ArticleResponseType, ArticleType } from "~/types";

import ArticleList from "~/components/ArticleList";

type LoaderData = {
  results: ArticleType[];
  pageNumber: number;
};

export const loader: LoaderFunction = async ({ params }) => {
  const pageNumber = parseInt(params.pageNumber || "1");
  const res = await fetch(`https://api.hnpwa.com/v0/jobs/${pageNumber}.json`);
  const results = (await res.json()) as ArticleResponseType[];
  const resultsView = results.map(
    (
      { id, url, title, domain, points, user, time_ago, comments_count },
      index
    ) => {
      return {
        id,
        url,
        title,
        domain,
        points,
        user,
        time_ago,
        comments_count,
        sequenceNumber: (pageNumber - 1) * 30 + index + 1,
      } as ArticleType;
    }
  );
  return { results: resultsView, pageNumber } as LoaderData;
};

export default function AskParamRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <section>
      <ArticleList articles={data.results} />
      <div className="more">
        <Link to={`/jobs/${data.pageNumber + 1}`}>More...</Link>
      </div>
    </section>
  );
}
