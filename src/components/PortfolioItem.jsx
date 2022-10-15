import Tag from "./Tag";
import LinkButton from "./LinkButton";

import styled from "styled-components";

const Article = styled.article`
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 8px;
  padding: 1rem;

  & h3 {
    font-weight: bold;
  }

  @media (min-width: 700px) {
    min-width: 500px;
    margin: 0 0.5rem;
  }
`;

const PortfolioItem = ({ project }) => {
  return (
    <Article>
      <img src={project.images[0].file.url} alt="" />
      <h3>{project.name}</h3>
      <p>{project.summary}</p>
      <div>
        {project.tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
      <LinkButton href={`/portfolio/${project.name.toLowerCase().split(" ").join("-")}`}>Details</LinkButton>
      <LinkButton internal={false} href={project.websiteLink}>
        Visit website
      </LinkButton>
    </Article>
  );
};

export default PortfolioItem;
