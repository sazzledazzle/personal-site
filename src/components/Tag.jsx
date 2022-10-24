import styled from "styled-components";

const Container = styled.div`
  background-color: var(--clr-portfolio-tech);
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  margin: 0.25rem 0.5rem 0.25rem 0;
  display: inline-block;
  font-size: 0.75rem;

  @media (min-width: 700px) {
    font-size: 0.875rem;
  }
`;

const Tag = ({ tag }) => {
  return <Container>{tag}</Container>;
};

export default Tag;
