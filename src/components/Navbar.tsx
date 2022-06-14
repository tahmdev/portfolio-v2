import React from "react";
import { NavLink } from "react-router-dom";

interface NavLink {
  path: string;
  name: string;
}
interface Props {}
export const Navbar: React.FC<Props> = () => {
  const navLinks: NavLink[] = [
    {
      path: "/",
      name: "About me",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  return (
    <nav>
      {navLinks.map((i) => (
        <NavLink
          key={i.path}
          to={i.path}
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {i.name}
        </NavLink>
      ))}
    </nav>
  );
};
