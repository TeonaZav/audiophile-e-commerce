import React from "react";
import styled from "styled-components";

import ProdusctsItem from "./ProdusctsItem";
function ProductList({ data }) {
  return (
    <Wrapper>
      <div>
        <ul>
          {data.map((el, index) => {
            return <ProdusctsItem item={el} index={index} />;
          })}
        </ul>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  ul {
    list-style-type: none;
  }
  @media (min-width: 48em) {
  }
  @media (min-width: 90em) {
  }
`;
export default ProductList;
