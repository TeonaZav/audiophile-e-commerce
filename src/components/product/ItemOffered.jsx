import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
function ItemOffered({ item, index }) {
  const { getProduct } = useProductsContext();
  const url = "http://localhost:5000/api/v1/products/all";
  return (
    <Wrapper>
      <div className="item-ct">
        <div className="image">
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

        <h3>{item.name}</h3>
        <div>
          <NavLink
            className="btn btn--full"
            to={"/all/" + item._id}
            onClick={(e) => getProduct(url, item._id)}
          >
            See Product
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .item-ct {
    width: 32.7rem;
    border-radius: 0.8rem;
    overflow: hidden;
    gap: 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .image {
    width: 32.7rem;
    height: 12rem;
    border-radius: 0.8rem;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--card-color);
  }
  .image img {
    width: 85%;
  }
  h3 {
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.3rem;
    letter-spacing: 1.71px;
    color: #000000;
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

  @media (min-width: 48em) {
    .item-ct {
      width: 22.3rem;
      gap: 4rem;
    }
    .image {
      width: 22.3rem;
      height: 31.8rem;
    }
    .image img {
      width: 100%;
    }
  }
  @media (min-width: 90em) {
    .item-ct {
      width: 35rem;
    }
    .image {
      width: 35rem;
    }
  }
`;
export default ItemOffered;
