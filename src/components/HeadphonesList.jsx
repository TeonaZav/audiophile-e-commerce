import React from "react";
import styled from "styled-components";
import data from "../data.json";
import ProdusctsItem from "./ProdusctsItem";
function HeadphonesList(props) {
  console.log(data.filter((el) => el.category === "headphones"));
  const headphonesData = data.filter((el) => el.category === "headphones");
  return (
    <Wrapper>
      <div>
        <ul>
          {headphonesData.map((el, index) => {
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
export default HeadphonesList;
