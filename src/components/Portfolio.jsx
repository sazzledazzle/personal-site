import styled from "styled-components";
import useProjects from "../hooks/useProjects";
import PortfolioItem from "./PortfolioItem";

const Section = styled.section`
  background-color: var(--clr-portfolio-bg);
  min-height: 50vh;

  & h2 {
    color: var(--clr-portfolio-header);
    margin-bottom: 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
`;

const Portfolio = () => {
  const [projects, isLoading] = useProjects();

  return (
    <Section aria-labelledby="portfolio">
      <h2 id="portfolio">Portfolio</h2>
      <Container>{isLoading ? <p>Loading...</p> : projects.map((project) => <PortfolioItem key={project.id} project={project} />)}</Container>
    </Section>
  );
};

export default Portfolio;
