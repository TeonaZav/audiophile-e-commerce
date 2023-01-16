import styled from "styled-components";
import AddToCart from "./AddToCart";
function Product({ item }) {
  return (
    <div>
      {item && JSON.stringify(item) !== "{}" ? (
        <Wrapper>
          <div className="container products-item-ct">
            <div className="container image-ct">
              <picture>
                <source
                  media="(min-width:1440px)"
                  srcSet={
                    process.env.PUBLIC_URL + item.image.desktop.substring(1)
                  }
                />
                <source
                  media="(min-width:768px)"
                  srcSet={
                    process.env.PUBLIC_URL + item.image.tablet.substring(1)
                  }
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
                <AddToCart />
              </div>
            </div>
          </div>
        </Wrapper>
      ) : null}
    </div>
  );
}
const Wrapper = styled.li`
  width: 100vw;
  min-height: 84.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .products-item-ct {
    gap: 3.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    letter-spacing: 1rem;
    text-transform: uppercase;
  }

  .image-ct {
    margin: 0 auto;
    width: 100%;
    height: 35.2rem;
    background-color: var(--card-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .image-ct img {
    width: 95%;
    height: auto;
    justify-self: center;
  }
  .btn-text-ct {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.4rem;
  }
  @media (min-width: 48em) {
    .container {
      width: 68.9rem;
    }
    .products-item-ct {
      flex-direction: row;
      justify-content: space-between;
      justify-content: center;
      gap: 6.9rem;
    }
    .image-ct {
      width: 28.1rem;
      height: 48rem;
    }
    .image-ct img {
      width: 100%;
      height: auto;
    }
    .btn-text-ct {
      width: 33.9rem;
      gap: 3.2rem;
    }
  }
  @media (min-width: 90em) {
    min-height: 72rem;
    .container {
      width: 111rem;
    }
    .products-item-ct {
      flex-direction: row;
      justify-content: space-between;
      gap: 0rem;
    }
    h2 {
      font-weight: 700;
      font-size: 4rem;
      line-height: 4.4rem;
      letter-spacing: 1.43px;
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
      width: 44.5rem;
      height: 56rem;
      padding: 0;
    }
  }
`;

export default Product;
