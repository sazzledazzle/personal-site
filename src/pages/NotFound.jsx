import LinkButton from "../components/LinkButton";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 6rem - 7.5975rem);

  & h1 {
    font-size: var(--fs-500);
    margin-bottom: 2rem;
  }

  @media (min-width: 700px) {
    min-height: calc(100vh - var(--header-md) - 7.5975rem);
  }

  @media (min-width: 700px) and (orientation: portrait) {
    min-height: calc(100vh - var(--header-md));
  }

  @media (min-width: 1200px) {
    min-height: calc(100vh - var(--header-lg);
  }
`;

const NotFound = () => {
  return (
    <Container>
      <div>
        <h1>Oops! That URL doesn't exist!</h1>
        <LinkButton href="/">Go to Home</LinkButton>
      </div>
    </Container>
  );
};

export default NotFound;
