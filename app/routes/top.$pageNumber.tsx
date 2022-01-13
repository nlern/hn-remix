import { Link, LoaderFunction, useLoaderData } from "remix";

type NewsResponse = {
  id: number;
  title: string;
  points: number;
  user: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url: string;
  domain: string;
};

type ViewItem = NewsResponse & {
  sequenceNumber: number;
};

type LoaderData = {
  results: ViewItem[];
  pageNumber: number;
};

export const loader: LoaderFunction = async ({ params }) => {
  const pageNumber = parseInt(params.pageNumber || "1");
  const res = await fetch(`https://api.hnpwa.com/v0/news/${pageNumber}.json`);
  const results = (await res.json()) as NewsResponse[];
  const resultsView = results.map((result, index) => {
    return {
      ...result,
      sequenceNumber: (pageNumber - 1) * 30 + index + 1,
    } as ViewItem;
  });
  return { results: resultsView, pageNumber } as LoaderData;
};

export default function TopParamRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <section>
      {data.results.map((item) => {
        return (
          <article key={item.id}>
            <div className="sequence-number">{item.sequenceNumber}</div>
            <div className="content">
              <div className="title">
                <a href={item.url} target="_blank" referrerPolicy="no-referrer">
                  {item.title} ({item.domain})
                </a>
              </div>
              <div className="subtitle">
                {item.points} by{" "}
                <Link to={`/user/${item.user}`}>{item.user}</Link>{" "}
                {item.time_ago} |{" "}
                <Link to={`/item/${item.id}`}>
                  {item.comments_count} comments
                </Link>
              </div>
            </div>
          </article>
        );
      })}
      <div className="more">
        <Link to={`/top/${data.pageNumber + 1}`}>More...</Link>
      </div>
    </section>
  );
}
