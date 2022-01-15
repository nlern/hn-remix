import { NavLink } from "remix";
import type { LinksFunction } from "remix";

import { navLinks } from "~/constants";

import stylesUrl from "./header.css";

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

export default function Header() {
  return (
    <nav>
      <img alt="Svelte Hacker News logo" className="icon" src="/favicon.ico" />

      <ul>
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink prefetch="intent" to={`${link.to}/1`}>
              {link.label}
            </NavLink>
          </li>
        ))}

        <li className="about">
          <NavLink to="/about">about</NavLink>
        </li>
      </ul>
    </nav>
  );
}
