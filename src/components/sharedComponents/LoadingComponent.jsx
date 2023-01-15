import CircularProgress from "@mui/material/CircularProgress";
import styled from "styled-components";
function LoadingComponent(props) {
  return (
    <Wrapper>
      <div style={{ textAlign: "center" }}>
        <span>
          <CircularProgress color="primary" className="spinner" size="9rem" />
          <h2>Loading ...</h2>
        </span>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  min-width: 100vw;
  height: 60vh;
  background-color: var(--main-bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .spinner {
    margin-bottom: 3.2rem;
  }
`;
export default LoadingComponent;
