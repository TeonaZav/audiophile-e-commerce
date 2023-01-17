import React from "react";
import { useCartContext } from "../../context/cart_context";
import styled from "styled-components";
import { PriceFormatter } from "../../utils/HelperFunctions";
import ProductAmountButton from "../product/ProductAmountButton";
function CartItem({ image, name, price, quantity }) {
  const { cart, cartTotal, totalItems, shipping } = useCartContext();
  return (
    <Wrapper>
      <div className="cart-image">
        <img src={process.env.PUBLIC_URL + `${image}`} alt="" />
      </div>
      <div className="name-price-wrap">
        <p className="cart-product-name">{name}</p>
        <p className="price">{PriceFormatter(price)}</p>
      </div>
      <ProductAmountButton
        quantity={quantity}
        className="amount-controls-btn"
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 27.1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  .cart-image {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  .cart-image img {
    width: 100%;
    height: 100%;
  }
  .cart-product-name {
    color: #000000;
  }
  .price {
    color: var(--pale-black-5);
  }
  .name-price-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .amount-controls-btn {
    width: 9.6rem;
    height: 3.2rem;
  }
  @media (min-width: 48em) {
  }

  @media (min-width: 90em) {
  }
`;

export default CartItem;
