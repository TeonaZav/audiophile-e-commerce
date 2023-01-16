import styled from "styled-components";

function IncludesItems({ quantity, name }) {
  return (
    <li>
      <Wrapper>
        <span>{quantity}x</span>
        <p>{name}</p>
      </Wrapper>
    </li>
  );
}
const Wrapper = styled.div`
  width: 32.7rem;
  display: flex;
  gap: 2.4rem;
  p {
    opacity: 0.75;
  }
  span {
    color: #d87d4a;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2.5rem;
  }
`;
export default IncludesItems;
