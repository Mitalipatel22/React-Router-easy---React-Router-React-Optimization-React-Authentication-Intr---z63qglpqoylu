import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink class="index-link" to="/" exact>
        Main
      </NavLink>
      <NavLink class="home-link" to="/home" exact>
        Home
      </NavLink>
    </nav>
  );
};
