import Tag from "./Tag";
import LinkButton from "./LinkButton";
import styled from "styled-components";

const Article = styled.article`
  background-color: var(--clr-portfolio-item-bg);
  border-radius: 8px;
  box-shadow: var(--box-shadow);
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  padding: 1.5rem;

  & h3 {
    font-size: var(--fs-400);
    font-weight: bold;
    margin: 0.5rem 0;
  }

  @media (min-width: 700px) {
    margin: 0 1rem;
    min-width: 400px;
    padding: 2rem;
    scroll-snap-align: start;

    & h3 {
      font-size: var(--fs-500);
    }
  }
`;

const TagContainer = styled.div`
  margin: 0.25rem 0 2rem;

  @media (min-width: 700px) {
    margin: 1rem 0 auto;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 700px) {
    margin-top: 1rem;
  }
`;

const PortfolioItem = ({ project }) => {
  return (
    <Article>
      <img src={project.images[0].file.url} alt={project.images[0].description} />
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <TagContainer>
        {project.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </TagContainer>
      <ButtonContainer>
        <LinkButton href={`/portfolio/${project.name.toLowerCase().split(" ").join("-")}`}>Details</LinkButton>
        <LinkButton internal={false} href={project.websiteLink}>
          Visit website
        </LinkButton>
      </ButtonContainer>
    </Article>
  );
};

export default PortfolioItem;
