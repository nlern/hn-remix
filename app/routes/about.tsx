import { MetaFunction } from "remix";
import { AppTitle } from "~/constants";

export const meta: MetaFunction = () => {
  return {
    title: "About" + " - " + AppTitle,
  };
};
export default function AboutRoute() {
  return (
    <>
      <h1>About this site</h1>

      <p>
        This is a simple Hacker News clone, built with{" "}
        <a href="https://remix.run">Remix</a>.
      </p>

      <p>
        This website design is inspired by{" "}
        <a href="https://hn.svelte.dev">Svelte Hacker News</a>.
      </p>

      <p>
        We're using{" "}
        <a href="https://github.com/davideast/hnpwa-api">hnpwa-api</a> as a
        backend. The app is hosted on <a href="https://netlify.com">Netlify</a>.{" "}
        The source code is <a href="https://github.com/nlern/hn.-remix">here</a>
        .
      </p>
    </>
  );
}
