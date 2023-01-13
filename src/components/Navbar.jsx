import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <ul className="nav-list">
      <li>
        <NavLink className="nav-link" to="/">
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/headphones">
          HEADPHONES
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/speakers">
          SPEAKERS
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to="/earphones">
          EARPHONES
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
