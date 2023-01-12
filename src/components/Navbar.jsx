import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
function Navbar(props) {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
const Wrapper = styled.ul`
  /**********
  MOBILE NAV list 
  **********/
  .nav-list {
    padding-top: 9.2rem;
    list-style-type: none;
  }
  .nav-link {
    color: #1d2026;
    font-size: 1.8rem;
    font-weight: 700;
    display: block;
  }

  @media (min-width: 90em) {
    .nav-list {
      padding-top: 0rem;
      padding-left: 0rem;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 3.2rem;
    }
    .nav-link:link,
    .nav-link:visited {
      display: inline-block;
      text-decoration: none;
      color: #ffffff;
      font-weight: 400;
      font-size: 1.5rem;
      line-height: 2.6rem;
      transition: all 0.3s;
      padding: 0rem 0rem 4.1rem 0rem;
    }
    .nav-link:hover,
    .nav-link:active {
      color: #d87d4a;
      box-shadow: 0 0.4rem #d87d4a;
    }
  }
`;

export default Navbar;
