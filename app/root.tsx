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
import Loader from "~/components/Loader/Loader";
import ThemeToggler from "~/components/ThemeToggler/ThemeToggler";

import stylesUrl from "~/styles/global.css";

import { links as headerLinks } from "~/components/Header/Header";
import { links as loaderLinks } from "~/components/Loader/Loader";
import { links as themeTogglerLinks } from "~/components/ThemeToggler/ThemeToggler";

export const links: LinksFunction = () => {
  return [
    { href: stylesUrl, rel: "stylesheet" },
    ...headerLinks(),
    ...loaderLinks(),
    ...themeTogglerLinks(),
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
        <meta name="theme-color" content="#333333" />
        <Meta />
        <Links />
      </head>
      <body>
        {transition.state === "loading" && <Loader />}
        <Header />
        <main>
          <Outlet />
        </main>
        <ThemeToggler />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
