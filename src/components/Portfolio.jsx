import styled from "styled-components";
import useProjects from "../hooks/useProjects";
import PortfolioItem from "./PortfolioItem";

const Section = styled.section`
  background-color: var(--clr-portfolio-bg);
  padding-bottom: 1rem;
  padding-top: 1rem;

  & h2 {
    color: var(--clr-portfolio-header);
    margin-bottom: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -4.5rem;
    background-color: var(--clr-portfolio-bg);
    height: 12rem;
    transform: skewY(-12deg);
    width: 100%;
    z-index: -1;

    @media (min-width: 700px) {
      top: -4rem;
      transform: skewY(-6deg);
    }

    @media (min-width: 1200px) {
      top: -6rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;

  @media (min-width: 700px) and (orientation: portrait) {
    flex-direction: row;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
`;

const Portfolio = () => {
  const [projects, isLoading] = useProjects();

  return (
    <Section id="portfolio" aria-labelledby="portfolio">
      <h2>Portfolio</h2>
      <Container>{isLoading ? <p>Loading...</p> : projects.map((project) => <PortfolioItem key={project.id} project={project} />)}</Container>
    </Section>
  );
};

export default Portfolio;
