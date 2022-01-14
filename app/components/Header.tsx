import { Link, useLocation } from "remix";
import { navLinks } from "~/constants";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header>
      <div className="logo"></div>
      <nav className="navbar">
        <ul className="navbar-links">
          {navLinks.map((link) => {
            const isCurrentRoute = pathname.startsWith(link.to);
            return (
              <li
                key={link.id}
                className={`navbar-link-item ${isCurrentRoute ? "active" : ""}`}
              >
                <Link to={link.to} className="link">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
