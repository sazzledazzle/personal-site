import styled from "styled-components";

const Section = styled.section`
  background-color: var(--clr-intro-bg);

  & h2 {
    color: var(--clr-intro-header);
  }
`;

const H1 = styled.h1`
  color: var(--clr-intro-header);
  font-size: 96px;
  padding: 2rem 0;
`;

const Intro = () => {
  return (
    <Section aria-label="intro">
      <H1>Hey, I'm Sarah.</H1>
      <p>Something something</p>
      <p>Something something else</p>
    </Section>
  );
};

export default Intro;
