import { Link } from "remix";

export default function Header() {
  const links = [
    {
      id: "top",
      to: "/top",
      label: "top",
    },
    {
      id: "new",
      to: "/new",
      label: "new",
    },
    {
      id: "show",
      to: "/show",
      label: "show",
    },
    {
      id: "ask",
      to: "/ask",
      label: "ask",
    },
    {
      id: "jobs",
      to: "/jobs",
      label: "jobs",
    },
  ];
  return (
    <header>
      <div className="logo"></div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.to}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
