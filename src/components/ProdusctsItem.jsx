import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
function ProdusctsItem({ item, index }) {
  const { getProduct } = useProductsContext();
  const url = "http://localhost:5000/api/v1/products/all";
  return (
    <Wrapper>
      <div
        className={
          index > 0 && index % 2 !== 0
            ? "container products-item-ct reverse"
            : "container products-item-ct"
        }
      >
        <div className="container image-ct">
          <picture>
            <source
              media="(min-width:1440px)"
              srcSet={process.env.PUBLIC_URL + item.image.desktop.substring(1)}
            />
            <source
              media="(min-width:768px)"
              srcSet={process.env.PUBLIC_URL + item.image.tablet.substring(1)}
              alt="headphone"
            />

            <img
              src={process.env.PUBLIC_URL + item.image.mobile.substring(1)}
              alt="headphone"
            />
          </picture>
        </div>
        <div className="container btn-text-ct">
          <p className="subheading">{item.new ? "NEW PRODUCT" : null}</p>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <div>
            <NavLink
              className="btn btn--full"
              // to={"/all/" + item._id}
              to={"/all/" + item.id} //temporary
              // onClick={(e) => getProduct(url, item._id)}
              onClick={(e) => getProduct(item.id)}
            >
              {console.log(item.id)}
              See Product
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
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
    letter-spacing: 2px;
    color: #000000;
  }
  p {
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
    background-color: var(--card-color);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .image-ct img {
    width: 95%;
    height: auto;
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
    .container {
      width: 68.9rem;
    }
    .products-item-ct {
      justify-content: center;
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
    .image-ct img {
      width: 80%;
      height: auto;
    }
    .btn-text-ct {
      padding: 0 5.9rem;
      gap: 3.2rem;
      justify-content: flex-start;
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
    .products-item-ct.reverse {
      flex-direction: row-reverse;
    }
    .subheading {
      text-align: left;
      align-self: flex-start;
    }
    .image-ct {
      width: 54rem;
      height: 56rem;
      text-align: center;
    }
    .image-ct img {
      width: 95%;
      height: auto;
      justify-self: center;
      align-self: center;
    }
    .btn-text-ct {
      justify-content: center;
      align-items: flex-start;
      text-align: left;
      width: 44.5rem;
      height: 56rem;
      padding: 0;
    }
  }
`;
export default ProdusctsItem;
