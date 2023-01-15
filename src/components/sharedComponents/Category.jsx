import styled from "styled-components";
const Category = ({ category }) => {
  return (
    <Wrapper>
      <div className="heading-ct">
        <h2>{category}</h2>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .heading-ct {
    min-width: 100vw;
    height: 10.2rem;
    background-color: #191919;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  h2 {
    font-weight: 700;
    font-size: 2.8rem;
    line-height: 3.8rem;
    text-align: center;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #ffffff;
  }
  @media (min-width: 48em) {
    .heading-ct {
      height: 24.6rem;
    }
    h2 {
      font-size: 4rem;
      line-height: 4.4rem;
      letter-spacing: 1.43px;
    }
  }

  @media (min-width: 90em) {
    .heading-ct {
      height: 23.9rem;
    }
  }
`;
export default Category;
