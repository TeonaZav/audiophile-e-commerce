import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
function Hero(props) {
  return (
    <Wrapper>
      <section className="hero">
        <div className="hero-ct">
          <motion.div
            className="hero-text-box"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          >
            <p className="sub-heading">NEW PRODUCT</p>
            <h1>XX99 Mark II HeadphoneS</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </motion.div>
          <div>
            <NavLink className="btn btn--full" to="/all/4">
              See Product
            </NavLink>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  height: 51.1rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  background-color: #191919;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${require("../../images/image-header-mobile.jpg")});
  .hero-ct {
    height: 100%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-text-box {
    width: 32.8rem;
    color: #ffffff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 2.8rem;
  }
  .sub-heading {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    letter-spacing: 1rem;
    opacity: 0.5;
    margin-bottom: 1.6rem;
  }
  h1 {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4rem;
    text-transform: uppercase;
    margin-bottom: 2.4rem;
  }
  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    opacity: 0.75;
  }

  .btn--full:link,
  .btn--full:visited {
    background-color: #d87d4a;
    color: #fff;
  }
  .btn--full:hover,
  .btn--full:active {
    background-color: #fbaf85;
    color: #fff;
  }
  @media (min-width: 48em) {
    height: 64rem;
    background-image: url(${require("../../images/image-header-tablet.jpg")});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom 4.5rem center;
    .hero-text-box {
      width: 39.6rem;
      margin-bottom: 4rem;
    }

    h1 {
      font-weight: 700;
      font-size: 5.6rem;
      line-height: 5.8rem;
      letter-spacing: 0.2rem;
    }
  }
  @media (min-width: 90em) {
    background-image: url(${require("../../images/image-hero-desktop.jpg")});
    height: 64rem;
    .hero-ct {
      width: 77%;
      justify-content: center;
      align-items: flex-start;
      margin: 0 auto;
    }
    .hero-text-box {
      width: 39.6rem;
      margin-bottom: 4rem;
      text-align: left;
    }
    .sub-heading {
      align-self: flex-start;
    }
  }
`;
export default Hero;
