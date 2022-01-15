import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";

hydrate(<RemixBrowser />, document);

try {
  if (!("theme" in localStorage)) {
    const theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    localStorage.setItem("theme", theme);
  }

  document.querySelector("html")?.classList?.add(localStorage.theme);
} catch (e) {
  console.error(e);
}
