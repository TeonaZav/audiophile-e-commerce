import styled from "styled-components";
import AddToCart from "./AddToCart";
import IncludesItems from "./IncludesItems";
import ProductGallery from "./ProductGallery";
import OfferedList from "./OfferedList";
import BtnGoBack from "./BtnGoBack";
import { PriceFormatter } from "../../utils/HelperFunctions";
import { ProductType } from "../../types";
interface IProductProps {
  item: any;
}
function Product({ item }: IProductProps) {
  return (
    <div>
      {item && JSON.stringify(item) !== "{}" ? (
        <Wrapper>
          <div>
            <div className="container products-item-ct">
              <BtnGoBack />
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
                  />

                  <img
                    src={
                      process.env.PUBLIC_URL + item.image.mobile.substring(1)
                    }
                    alt="headphone"
                  />
                </picture>
              </div>
              <div className="container btn-text-ct">
                <p className="subheading">{item.new ? "NEW PRODUCT" : null}</p>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <p className="price"> {PriceFormatter(item.price)}</p>
                <AddToCart />
              </div>
            </div>
            <div className="features-includes-ct">
              <div className="features">
                <h2>FEATURES</h2>
                <p>{item.features}</p>
              </div>
              <div className="includes">
                <h2>in the box</h2>
                <ul>
                  {item.includes.map((el: any, index: number) => {
                    return (
                      <IncludesItems
                        quantity={el.quantity}
                        name={el.item}
                        key={index}
                      />
                    );
                  })}
                </ul>
              </div>
            </div>
            <ProductGallery item={item} />
            <OfferedList data={item.others} />
          </div>
        </Wrapper>
      ) : null}
    </div>
  );
}
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6.5rem;
  .products-item-ct {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3.2rem;
    margin-bottom: 8.8rem;
    position: relative;
  }
  .container {
    width: 32.7rem;
    border-radius: 0.8rem;
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
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }
  .features {
    width: 32.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    gap: 2.4rem;
    margin-bottom: 8.8rem;
  }
  .features-includes-ct {
    margin-bottom: 8.8rem;
  }
  .includes {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  .price {
    color: #000000;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
  @media (min-width: 48em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8.2rem;
    .container {
      width: 68.9rem;
    }
    .products-item-ct {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 12rem;
      gap: 6.95rem;
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
    .features {
      width: 68.9rem;
      gap: 3.2rem;
    }
    .includes {
      width: 68.9rem;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  @media (min-width: 90em) {
    margin-top: 16rem;
    .container {
      width: 111rem;
    }
    .products-item-ct {
      gap: 12.5rem;
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
      background-color: var(--card-color);
    }
    .image-ct img {
      width: 100%;
      height: auto;
      justify-self: center;
      align-self: center;
    }
    .btn-text-ct {
      width: 44.5rem;
      height: 56rem;
      padding: 0;
    }
    .features {
      width: 63.5rem;
      margin-bottom: 0rem;
    }
    .features-includes-ct {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 12rem;
    }
    .includes {
      flex-direction: column;
      justify-content: center;
      width: 35rem;
      gap: 3.2rem;
    }
  }
`;

export default Product;
