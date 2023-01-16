import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ProductAmountButton from "./ProductAmountButton";
function AddToCart(props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <Wrapper>
      <ProductAmountButton />
      <div>
        <NavLink className="btn btn--full" to="/">
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
