import React, { useState } from "react";
import { useCartContext } from "../../context/cart_context";
import styled from "styled-components";
import { PriceFormatter } from "../../utils/HelperFunctions";
import ProductAmountButton from "../product/ProductAmountButton";
import { ProductType } from "../../types";
interface ICheckoutItemProps {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
  item: ProductType;
  className?: string;
}

function CheckoutItem({
  id,
  image,
  name,
  price,
  quantity,
  item,
}: ICheckoutItemProps) {
  const { cart, cartTotal, totalItems, removeItem, toggleQuantity } =
    useCartContext();

  return (
    <Wrapper>
      <div className="name-price-ct">
        <div className="cart-image">
          <img src={process.env.PUBLIC_URL + `${image}`} alt="" />
        </div>
        <div className="name-price-wrap">
          <p className="cart-product-name">{name}</p>
          <p className="price">{PriceFormatter(price)}</p>
        </div>
      </div>

      <div>
        <p>x {quantity}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 26.4rem;
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
  p {
    color: var(--pale-black-5);
  }
  .name-price-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .name-price-ct {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
  }
  @media (min-width: 48em) {
    width: 60.8rem;
  }
  @media (min-width: 90em) {
    width: 28.4rem;
  }
`;

export default CheckoutItem;
