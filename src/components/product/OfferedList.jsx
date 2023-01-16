import React from "react";
import styled from "styled-components";
import ItemOffered from "./ItemOffered";
function OfferedList({ data }) {
  return (
    <Wrapper>
      {data.map((el, index) => {
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
    gap: 1.1rem;
  }
  @media (min-width: 90em) {
    width: 111rem;
    gap: 3rem;
    margin-bottom: 12rem;
  }
`;
export default OfferedList;
