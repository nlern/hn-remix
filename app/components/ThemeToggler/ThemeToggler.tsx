import { useEffect, useRef, useState } from "react";
import type { LinksFunction } from "remix";
import stylesUrl from "./theme-toggler.css";

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

export default function ThemeToggler() {
  const [nice, setNice] = useState(false);
  const [theme, setTheme] = useState("light");
  const firstRender = useRef(true);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    try {
      setTheme(localStorage.getItem("theme") || "light");
    } catch (e) {}
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const { classList } = document.querySelector("html") as HTMLElement;
    classList.remove(theme === "light" ? "dark" : "light");
    classList.add(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  return (
    <div className="theme-toggler">
      <button
        aria-label="Toggle theme"
        title="Toggle theme"
        className={nice ? "nice" : ""}
        onMouseDown={() => setNice(true)}
        onBlur={() => setNice(false)}
        onClick={toggle}
      >
        toggle theme
        <svg viewBox="0 0 24 24">
          {theme === "light" ? (
            <path
              className="dark"
              d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
            />
          ) : (
            <path
              className="light"
              d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
            />
          )}
        </svg>
      </button>
    </div>
  );
}
