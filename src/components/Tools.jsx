import styled from "styled-components";

const Section = styled.section`
  background-color: var(--clr-tools-bg);

  & h2 {
    color: var(--clr-tools-header);
  }
`;

const Tools = () => {
  return (
    <Section aria-labelledby="tools">
      <h2 id="tools">Tools & Technologies</h2>
    </Section>
  );
};

export default Tools;
