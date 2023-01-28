import React from "react";
import { NavLink } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
function Navbar() {
  const { menuIsClose, openSidebar } = useProductsContext();

  return (
    <ul className="nav-list" onClick={!menuIsClose ? openSidebar : undefined}>
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
