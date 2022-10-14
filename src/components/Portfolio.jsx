import styled from "styled-components";
import useProjects from "../hooks/useProjects";

const Section = styled.section`
  background-color: var(--clr-portfolio-bg);

  & h2 {
    color: var(--clr-portfolio-header);
  }
`;

const Portfolio = () => {
  const [projects, isLoading] = useProjects();

  return (
    <Section aria-labelledby="portfolio">
      <h2 id="portfolio">Portfolio</h2>
    </Section>
  );
};

export default Portfolio;
