import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useTransition,
} from "remix";
import type { MetaFunction } from "remix";

import Header from "~/components/Header/Header";
import ProgressIndicator from "~/components/ProgressIndicator/ProgressIndicator";

import stylesUrl from "~/styles/global.css";

import { links as headerLinks } from "~/components/Header/Header";
import { links as progressIndicatorLinks } from "~/components/ProgressIndicator/ProgressIndicator";

export const links: LinksFunction = () => {
  return [
    { href: stylesUrl, rel: "stylesheet" },
    ...headerLinks(),
    ...progressIndicatorLinks(),
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Remix Hacker News" };
};

export default function App() {
  const transition = useTransition();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {transition.state === "loading" && <ProgressIndicator />}
        <Header />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
