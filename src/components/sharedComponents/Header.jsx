import React, { useState, useContext } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import MobileNavIcon from "../icons/MobileNavIcon";
import CartModal from "../cart/CartModal";
import { NavLink } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
function Header() {
  const { menuIsClose, openSidebar, closeSidebar } = useProductsContext();
  const { modalIsOpen, openModal, closeModal, totalItems } = useCartContext();
  return (
    <Wrapper>
      <CartModal />
      <header className="header nav-open">
        <div className="header-ct">
          <div className="logo-nav-container">
            <div
              className="mobile-header"
              onClick={menuIsClose ? closeSidebar : openSidebar}
            >
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
          <div
            className="cart-icon-wrap"
            onClick={modalIsOpen ? closeModal : openModal}
          >
            {totalItems ? (
              <span className="cart-product-number">{totalItems}</span>
            ) : null}

            <img src={process.env.PUBLIC_URL + "/cart.png"} alt="" />
          </div>

          <div className="mobile-nav-container">
            <div className="mobile-nav-wrap">
              <nav
                className={menuIsClose ? "mobile-nav close" : "mobile-nav open"}
              >
                <Navbar />
              </nav>
            </div>
          </div>
        </div>
        <div
          className={`${
            menuIsClose && !modalIsOpen ? "overlay hidden" : "overlay"
          }`}
        ></div>
      </header>
    </Wrapper>
  );
}
const Wrapper = styled.header`
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
    margin-bottom: -0.1rem;
  }
  .header-ct {
    width: 100%;
    padding: 0 2.4rem;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #191919;
    border-bottom: 1px solid hwb(0 100% 0% / 0.2);
    z-index: 3000;
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
    z-index: 3000;
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
    background-color: #d87d4a;
    border-radius: 0.8rem;
    z-index: 3000;
    color: #ffffff;
    padding: 0.1rem 1rem 0.5rem 1rem;
    font-size: 1rem;
    line-height: 1.2rem;
  }

  /************ MOBILE NAVIGATION **********/

  .mobile-nav-wrap {
    width: 80vw;
    overflow: hidden !important;
    visibility: hidden;
  }

  .mobile-nav-container {
    position: absolute;
    width: 80vw;
    height: 100%;
    top: 0rem;
    left: 0;
    z-index: 1500;
  }

  .mobile-nav {
    background: #191919ea;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid #191919ea;
    width: 80%;
    height: 100vh;
    color: #ffffff;
    -webkit-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
  .mobile-nav.open {
    visibility: visible;
    opacity: 1;
    transform: translate(0, 0);
  }
  .mobile-nav.close {
    transform: translate(-100%, 0);
    visibility: hidden;
    opacity: 0;
  }
  /**********
  MOBILE NAV list 
  **********/
  .nav-list {
    padding-top: 9.2rem;
    list-style-type: none;
    margin-left: 10%;
  }
  .nav-link {
    color: #ffffffd5;
    font-size: 1.8rem;
    font-weight: 400;
    display: block;
    text-decoration: none;
    margin-bottom: 2.4rem;
  }
  .nav-link:hover,
  .nav-link:active {
    color: #d87d4a;
  }
  .mobile-header {
    width: 5rem;
    color: #fff;
    z-index: 1600;
  }

  @media (min-width: 48em) {
    .header-ct {
      padding: 0 3.9rem;
    }
    .cart-product-number {
      right: 2.4rem;
    }
  }

  @media (min-width: 90em) {
    .header-ct {
      padding: 0 16.5rem;
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
    .nav-list {
      padding-top: 0rem;
      padding-left: 0rem;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 3.2rem;
      margin-left: unset;
    }
    .nav-link:link,
    .nav-link:visited {
      display: inline-block;
      text-decoration: none;
      margin-bottom: 0;
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
export default Header;
