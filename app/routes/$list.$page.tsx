import { json, Link, useLoaderData } from "remix";
import type { LoaderFunction, LinksFunction, MetaFunction } from "remix";
import type { ArticleResponseType } from "~/types";
import ArticleList from "~/components/ArticleList";
import { links as articleLinks } from "~/components/Article/Article";
import { AppTitle } from "~/constants";

type LoaderData = {
  items: ArticleResponseType[];
  page: number;
  list: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const valid_lists = new Set(["news", "newest", "show", "ask", "jobs"]);
  const list =
    params.list === "top"
      ? "news"
      : params.list === "new"
      ? "newest"
      : params.list!;

  if (!valid_lists.has(list)) {
    console.log(`invalid list parameter ${list}`);
    return json("Not found", { status: 404 });
  }
  const page = +params.page!;

  const res = await fetch(`https://api.hnpwa.com/v0/${list}/${page}.json`);
  const items = (await res.json()) as ArticleResponseType[];

  return { items, page, list } as LoaderData;
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: AppTitle,
    description: `Latest Hacker News stories in the ${data.list} category`,
  };
};

export const links: LinksFunction = () => {
  return [...articleLinks()];
};

export default function ListPageRoute() {
  const data = useLoaderData<LoaderData>();

  const PAGE_SIZE = 30;

  const start = 1 + (data.page - 1) * PAGE_SIZE;
  const next = `/${data.list}/${+data.page + 1}`;

  return (
    <>
      <ArticleList articles={data.items} start={start} />
      <div className="more">
        <Link to={next}>More...</Link>
      </div>
    </>
  );
}
