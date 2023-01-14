import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import data from "../data.json";
function ProdusctsItem(props) {
  return (
    <Wrapper>
      <div className="container products-item-ct">
        <div className="container image-ct">
          <img
            src={require(`../assets/home/mobile/image-earphones-yx1.jpg`)}
            alt="headphone"
          />
        </div>
        <div className="container btn-text-ct">
          <p className="subheading">NEW PRODUCT</p>
          <h2>XX99 Mark I Headphon</h2>
          <p>
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <div>
            <NavLink className="btn btn--full" to="/">
              See Product
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100vw;
  height: 84.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .products-item-ct {
    gap: 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .container {
    width: 32.7rem;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  h2 {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.8rem;
    letter-spacing: 2px;
    color: #000000;
  }
  p {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 2.5rem;
    opacity: 0.75;
    color: var(--pale-black-5);
  }
  .subheading {
    color: #d87d4a;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.9rem;
    text-align: center;
    letter-spacing: 1rem;
    text-transform: uppercase;
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
  .image-ct {
    height: 35.2rem;
  }
  .image-ct img {
    width: 100%;
    height: 100%;
  }
  .btn-text-ct {
    width: 100%;
    padding: 0 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 2.4rem;
  }
  @media (min-width: 48em) {
    height: 82.6rem;
    .container {
      width: 68.9rem;
    }
    .products-item-ct {
      gap: 5.2rem;
    }

    h2 {
      font-weight: 700;
      font-size: 4rem;
      line-height: 4.4rem;
      letter-spacing: 1.43px;
    }

    .image-ct {
      width: 68.9rem;
      height: 35.2rem;
    }

    .btn-text-ct {
      padding: 0 5.9rem;
      height: 47.4rem;
      gap: 3.2rem;
    }
  }
  @media (min-width: 90em) {
    height: 72rem;
    .container {
      width: 111rem;
    }
    .products-item-ct {
      flex-direction: row;
      text-align: left;
      justify-content: space-between;
      gap: 0rem;
    }
    .subheading {
      text-align: left;
      align-self: flex-start;
    }
    .image-ct {
      width: 54rem;
      height: 56rem;
    }

    .btn-text-ct {
      text-align: left;
      width: 44.5rem;
      height: 56rem;
      padding: 0;
    }
  }
`;
export default ProdusctsItem;
