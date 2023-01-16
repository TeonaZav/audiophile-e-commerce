import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function BtnGoBack(props) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button onClick={() => navigate(-1)}>Go back</button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: -5rem;
  z-index: 30;
  overflow: hidden;
  button {
    color: var(--pale-black-5);
    background-color: var(--main-bg-color);
    display: inline-block;
    font-size: 1.3rem;
    line-height: 1.8rem;
    font-weight: 700;
    padding: 1rem 3rem 1rem 0;
    border-radius: 0.3rem;
    letter-spacing: 0.1rem;
    text-decoration: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.3s;
  }
  button:hover,
  button:active {
    color: #d87d4a;
  }
`;

export default BtnGoBack;
