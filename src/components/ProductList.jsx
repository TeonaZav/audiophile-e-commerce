import React from "react";
import styled from "styled-components";

import ProdusctsItem from "./ProdusctsItem";
function ProductList({ data }) {
  return (
    <Wrapper>
      <div>
        {data.map((el, index) => {
          return <ProdusctsItem key={el._id} item={el} index={index} />;
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  @media (min-width: 48em) {
  }
  @media (min-width: 90em) {
  }
`;
export default ProductList;
