import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
function HompageProducts(props) {
  return (
    <Wrapper>
      <section className="hompage-product-section">
        <div className="container hompage-product1-ct">
          <div className="product-image">
            <img
              src={require(`../assets/home/mobile/image-speaker-zx9.png`)}
              alt="speaker product"
            />
          </div>

          <img
            src={process.env.PUBLIC_URL + "/patterns/pattern-circles.svg"}
            alt="pattern"
            className="pattern"
          />
          <div>
            <div className="product1-text-box">
              <h2>
                ZX9 <br />
                SPEAKER
              </h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
            </div>
            <div>
              <NavLink className="btn btn--full" to="/">
                See Product
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100vw;
  height: 142.9rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  .container {
    width: 32.7rem;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  .hompage-product1-ct {
    background-color: #d87d4a;
    height: 60rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .product-image {
      width: 17.2rem;
      height: 20rem;
      margin-top: 5.7rem;
      margin-bottom: 3.2rem;
      z-index: 10;
    }
    .product-image img {
      width: 100%;
      height: auto;
    }
    .pattern {
      position: absolute;
      width: 32rem;
      height: 32rem;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
    }
    .product1-text-box {
      width: 28rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;
      margin-bottom: 2.8rem;
      z-index: 10;
      h2 {
        color: #ffffff;
        font-weight: 700;
        font-size: 3.6rem;
        line-height: 4rem;
        text-transform: uppercase;
        letter-spacing: 1.29px;
      }
      p {
        color: var(--pale-white-75);
      }
    }
  }

  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    opacity: 0.75;
  }

  .btn--full:link,
  .btn--full:visited {
    background-color: #000000;
    color: #fff;
    z-index: 100;
  }
  .btn--full:hover,
  .btn--full:active {
    background-color: #4c4c4c;
    z-index: 10;
  }
  @media (min-width: 48em) {
    .container {
      width: calc(100vw - 8rem);
    }
    .hompage-product1-ct {
      height: 72rem;
      .product-image {
        width: 19.7rem;
        height: 23.7rem;
        margin-top: 5.2rem;
        margin-bottom: 6.4rem;
      }
      .product-image img {
        content: url(${require(`../assets/home/tablet/image-speaker-zx9.png`)}) !important;
      }
      .pattern {
        top: -15%;
        width: 54.2rem;
        height: 54.2rem;
      }
      .product1-text-box {
        width: 26.1rem;
        margin-bottom: 4rem;
        h2 {
          font-size: 5.6rem;
          line-height: 5.8rem;
          letter-spacing: 2px;
        }
      }
    }
  }
  @media (min-width: 90em) {
    .container {
      width: calc(100vw - 33rem);
    }
    .hompage-product1-ct {
      height: 56rem;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: left;
      gap: 13.8rem;
      .product-image {
        width: 41rem;
        height: 49.3rem;
        margin-top: 9.6rem;
        margin-bottom: -2.9rem;
      }
      .product-image img {
        content: url(${require(`../assets/home/desktop/image-speaker-zx9.png`)}) !important;
      }
      .pattern {
        top: 0;
        left: 25%;
        width: 94.4rem;
        height: 94.4rem;
      }
      .product1-text-box {
        align-items: flex-start;
        width: 34.9rem;
        margin-bottom: 4rem;
        text-align: left;
      }
    }
  }
`;
export default HompageProducts;
