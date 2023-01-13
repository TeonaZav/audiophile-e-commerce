import styled from "styled-components";
import { useProductsContext } from "../../context/products_context";
function MobileNavIcon(props) {
  const { menuIsClose } = useProductsContext();
  return (
    <Wrapper>
      <div className="menu-toggle">
        <div className={`line line1 ${menuIsClose ? "close" : "open"}`}></div>
        <div className={`line line2 ${menuIsClose ? "close" : "open"}`}></div>
        <div className={`line line3 ${menuIsClose ? "close" : "open"}`}></div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .line {
    background-color: #69707d;
  }

  .line {
    display: flex;
    width: 1.6rem;
    height: 0.3rem;
    margin: 0.3rem 0;
    position: relative;
    transform-origin: 5px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
  .line:first-child {
    transform-origin: 0% 0%;
  }
  .line:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  .line1.open {
    transform: rotate(45deg) translate(0px, -3.2px);
  }
  .line2.open {
    transform: rotate(-45deg) translate(0px, 3.2px);
  }
  .line3.open {
    opacity: 0;
  }

  .line1.close {
    transform: rotate(0deg) translate(0, 0);
  }
  .line2.close {
    transform: rotate(0deg) translate(0, 0);
  }
  .line3.close {
    opacity: 1;
  }

  .menu-toggle:hover {
    cursor: pointer;
  }

  @media (min-width: 90em) {
    .mobile-header {
      display: none;
    }
  }
`;

export default MobileNavIcon;
