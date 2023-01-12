import styled from "styled-components";
function MobileNavIcon(props) {
  return (
    <Wrapper>
      <div className="menu-toggle">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
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
