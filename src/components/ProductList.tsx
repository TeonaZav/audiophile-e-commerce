import React from "react";
import styled from "styled-components";

import ProdusctsItem from "./ProdusctsItem";
import { ProductType } from "../types";
interface IProdusctsItemProps {
  data: any;
}
function ProductList({ data }: IProdusctsItemProps) {
  return (
    <Wrapper>
      <div>
        {data.map((el: any, index: number) => {
          {
            /* return <ProdusctsItem key={el._id} item={el} index={index} />; */
          }
          return <ProdusctsItem key={el.id} item={el} index={index} />;
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
