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
              alt="speaker"
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
        <div className="container hompage-product2-ct">
          <div className="name-btn-wrap">
            <h2>ZX7 SPEAKER</h2>
            <div>
              <NavLink className="btn btn--outline" to="/">
                See Product
              </NavLink>
            </div>
          </div>
        </div>
        <div className="container hompage-product3-ct">
          <div className="container image-ct">
            <img
              src={require(`../assets/home/mobile/image-earphones-yx1.jpg`)}
              alt="headphone"
            />
          </div>
          <div className="container btn-ct">
            <h2>YX1 EARPHONES</h2>
            <div>
              <NavLink className="btn btn--outline" to="/">
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
  justify-content: center;
  align-items: center;
  text-align: center;
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
  .btn--outline:link,
  .btn--outline:visited {
    background-color: transparent;
    color: #000000;
    border: 1px solid #000000;
  }
  .btn--outline:hover,
  .btn--outline:active {
    background-color: #000000;
    color: #fff;
  }
  h2 {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.8rem;
    letter-spacing: 2px;
    color: #000000;
  }
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
    margin-bottom: 2.4rem;
  }
  .hompage-product2-ct {
    height: 32rem;
    background: url(${require("../assets/home/mobile/image-speaker-zx7.jpg")});
    background-repeat: no-repeat;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 2.4rem;
    .name-btn-wrap {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3.2rem;
      text-align: left;
    }
    margin-bottom: 2.4rem;
  }
  .hompage-product3-ct {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    height: 42.4rem;
    .image-ct {
      height: 20rem;
    }
    .image-ct img {
      content: url(${require(`../assets/home/mobile/image-earphones-yx1.jpg`)}) !important;
      width: 100%;
      height: 100%;
    }
    .btn-ct {
      padding: 0 2.4rem;
      height: 20rem;
      background-color: var(--card-color);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      text-align: left;
      gap: 3.2rem;
    }
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
    .hompage-product2-ct {
      background: url(${require("../assets/home/tablet/image-speaker-zx7.jpg")});
      background-repeat: no-repeat;
      background-position: center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      padding: 0 6.3rem;
    }
    .hompage-product3-ct {
      flex-direction: row;
      height: 32rem;
      .image-ct {
        height: 32rem;
      }
      .image-ct img {
        content: url(${require(`../assets/home/tablet/image-earphones-yx1.jpg`)}) !important;
      }
      .btn-ct {
        height: 32rem;
        padding: 0 6.3rem;
      }
    }
  }
  @media (min-width: 90em) {
    .container {
      width: 111rem;
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
      margin-bottom: 4.8rem;
    }
    .hompage-product2-ct {
      background-image: url(${require("../assets/home/desktop/image-speaker-zx7.jpg")});
      background-repeat: no-repeat;
      background-position: center center;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      padding: 0 9.5rem;
      margin-bottom: 4.8rem;
    }
    .hompage-product3-ct {
      .image-ct {
        width: 54rem;
        height: 32rem;
      }
      .image-ct img {
        content: url(${require(`../assets/home/desktop/image-earphones-yx1.jpg`)}) !important;
      }
      .btn-ct {
        width: 54rem;
        height: 32rem;
        padding: 0 9.5rem;
      }
    }
  }
`;
export default HompageProducts;
