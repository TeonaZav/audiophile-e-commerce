import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ProductAmountButton from "./ProductAmountButton";
import { useProductsContext } from "../../context/products_context";
import { useCartContext } from "../../context/cart_context";
function AddToCart(props) {
  const { addToCart } = useCartContext();
  const { item } = useProductsContext();
  const [quantity, setQuantity] = useState(1);
  const increaseQ = () => {
    setQuantity((before) => {
      return before + 1;
    });
  };
  const decreaseQ = () => {
    setQuantity((before) => {
      if (before > 1) {
        return before - 1;
      } else {
        return before;
      }
    });
  };
  return (
    <Wrapper>
      <ProductAmountButton
        quantity={quantity}
        increaseQ={increaseQ}
        decreaseQ={decreaseQ}
      />
      <div>
        <NavLink
          className="btn btn--full"
          to="/"
          onClick={(e) => addToCart(item.id, quantity, item)}
        >
          ADD TO CART
        </NavLink>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 29.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
`;

export default AddToCart;
