import styled from "styled-components";

const Container = styled.div`
  background-color: plum;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  margin-right: 0.5rem;
  display: inline-block;
`;

const Tag = ({ tag }) => {
  return <Container>{tag}</Container>;
};

export default Tag;
