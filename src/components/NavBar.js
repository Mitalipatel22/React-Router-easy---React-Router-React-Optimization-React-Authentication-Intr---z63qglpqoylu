import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink className="index-link" to="/" exact="true">
        Main
      </NavLink>
      <NavLink className="home-link" to="/home">
        Home
      </NavLink>
    </nav>
  );
};
