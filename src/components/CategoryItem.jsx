import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function CategoryItem(props) {
  return (
    <div>
      <ul className="nav-list">
        <li>
          <NavLink className="nav-link" to="/headphones">
            <img src="" alt="" />
            HEADPHONES
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/">
            SPEAKERS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/earphones">
            EARPHONES
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
const Wrapper = styled.div``;
export default CategoryItem;
