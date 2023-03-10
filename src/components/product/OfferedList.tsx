import React from "react";
import styled from "styled-components";
import ItemOffered from "./ItemOffered";
import { ProductType } from "../../types";
interface IOfferedListProps {
  data: ProductType[];
}
function OfferedList({ data }: IOfferedListProps) {
  return (
    <Wrapper>
      {data.map((el: any, index: number) => {
        return <ItemOffered key={index} item={el} index={index} />;
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 32.7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  margin-bottom: 8.8rem;
  @media (min-width: 48em) {
    width: 68.9rem;
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
  }
  @media (min-width: 90em) {
    width: 111rem;
    gap: 3rem;
    margin-bottom: 12rem;
  }
`;
export default OfferedList;
