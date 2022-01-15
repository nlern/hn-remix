import { NavLink } from "remix";
import type { LinksFunction } from "remix";

import { navLinks } from "~/constants";

import stylesUrl from "./header.css";

export const links: LinksFunction = () => {
  return [{ href: stylesUrl, rel: "stylesheet" }];
};

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/">HN Clone</NavLink>
        </div>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id} className="navbar-link-item">
              <NavLink prefetch="intent" to={link.to} className="link">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
