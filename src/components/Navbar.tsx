import React from "react";
import { NavLink } from "react-router-dom";

interface Props {}
export const Navbar: React.FC<Props> = () => {
  return (
    <nav>
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About me
      </NavLink>
      <NavLink
        to={"/Projects"}
        className={({ isActive }) => (isActive ? "active" : "aaa")}
      >
        Projects
      </NavLink>
      <NavLink
        to={"/Contact"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Contact
      </NavLink>
    </nav>
  );
};
