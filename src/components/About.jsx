import styled from "styled-components";

const Section = styled.section`
  background-color: var(--clr-about-bg);

  & h2 {
    color: var(--clr-about-header);
  }
`;

const About = () => {
  return (
    <Section id="about" aria-labelledby="aboutme">
      <h2 id="aboutme">About Me</h2>
    </Section>
  );
};

export default About;
