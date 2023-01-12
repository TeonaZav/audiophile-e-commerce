import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import MobileNavIcon from "./MobileNavIcon";
import { CartIcon } from "./CartIcon";
import { NavLink } from "react-router-dom";
function Header(props) {
  return (
    <Wrapper>
      <header className="header nav-open">
        <div className="header-ct">
          <div className="logo-nav-container">
            <div className="mobile-header">
              <MobileNavIcon />
            </div>

            <div>
              <NavLink to="/">
                <img
                  src={process.env.PUBLIC_URL + "/logo.svg"}
                  className="logo"
                  alt="logo"
                />
              </NavLink>
            </div>

            <nav className="main-nav">
              <Navbar />
            </nav>
          </div>
          <div></div>
          <div className="cart-icon-wrap">
            <span
              className="cart-product-number"
              style={{ display: "inline-block" }}
            >
              0
            </span>
            {/* <CartIcon className="cart-icon" /> */}
            <img src={process.env.PUBLIC_URL + "/cart.png"} alt="" />
          </div>

          <div className="mobile-nav-container">
            <div className="mobile-nav-wrap">
              <nav className="mobile-nav">
                <Navbar />
              </nav>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  /* HEADER */
  .header {
    min-width: 100vw;
    height: 8.9rem;
    background-color: #191919;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .header-ct {
    width: calc(100% - 4.8rem);
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #191919;
  }
  /* NAVIGATION */
  .main-nav {
    position: absolute;
    top: 35%;
    left: calc(16.5rem + 14.3rem + 13%);
    display: none;
  }

  .nav-open.main-nav {
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
    transform: translateX(0);
    display: flex;
  }

  .logo-nav-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
  }

  .cart-icon-wrap {
    cursor: pointer;
    z-index: 3000;
    max-width: 2rem;
    max-height: 2rem;
  }

  .cart-product-number {
    position: absolute;
    top: 20%;
    right: 1rem;
    background-color: #ff7e1b;
    border-radius: 0.5rem;
    z-index: 3000;
    color: #ffffff;
    padding: 0.1rem 1rem 0.5rem 1rem;
    font-size: 1rem;
    line-height: 1.2rem;
  }

  /************ MOBILE NAVIGATION **********/

  .mobile-nav-wrap {
    width: 50%;
    overflow: hidden !important;
    visibility: hidden;
  }

  .mobile-nav-container {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0rem;
    z-index: 1500;
  }

  .mobile-nav {
    background-color: #ffffff;
    max-width: 66%;
    height: 90rem;
    transform: translate(-100%, 0);
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
  .mobile-header {
    width: 5rem;
    color: #fff;
    z-index: 1600;
  }
  @media (min-width: 48em) {
    .header-ct {
      width: calc(100% - 7.8rem);
    }
    .cart-product-number {
      right: 2.4rem;
    }
  }

  @media (min-width: 90em) {
    .header-ct {
      width: calc(100% - 33rem);
    }
    .mobile-nav,
    .mobile-nav-wrap,
    .mobile-header,
    .mobile-nav-container {
      display: none;
    }

    .nav-open .main-nav {
      display: flex;
    }

    .logo-nav-container {
      display: flex;
      flex-direction: row;
      gap: 5.7rem;
    }
    .cart-product-number {
      right: 15rem;
    }
  }
`;
export default Header;
