import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ProductAmountButton = ({ decreaseQ, increaseQ, quantity }) => {
  return (
    <Wrapper>
      <button>
        <div onClick={decreaseQ}>
          <FontAwesomeIcon className="controls" icon={faMinus} />
        </div>

        <p>{quantity}</p>
        <div onClick={increaseQ}>
          <FontAwesomeIcon className="controls" icon={faPlus} />
        </div>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 12rem;
  height: 4.8rem;
  background-color: #f1f1f1;

  button {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    transition: all 0.3s;
    border-radius: 0.3rem;
  }
  p {
    color: #000000;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  .controls {
    color: var(--pale-black-25);
  }

  button div {
    width: 4rem;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  button div:hover .controls {
    color: #d87d4a;
  }
`;

export default ProductAmountButton;
