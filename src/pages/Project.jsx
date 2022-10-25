import { useParams } from "react-router-dom";
import useSingleProject from "../hooks/useSingleProject";
import Tag from "../components/Tag";
import LinkButton from "../components/LinkButton";
import styled from "styled-components";

const Container = styled.main`
  min-height: calc(100vh - 7.5975rem - var(--header-md));
  padding: 0 var(--padding-side-sm) 2rem;

  & h1 {
    font-size: var(--fs-600);
    color: var(--clr-100);
    margin: 1.5rem 0;
  }

  & p {
    margin: 1.5rem 0;
    white-space: pre-line;
  }

  @media (min-width: 700px) {
    margin-top: var(--header-md);
  }

  @media (min-width: 1200px) {
    margin-top: var(--header-lg);
    min-height: calc(100vh - 10.79875rem - var(--header-lg));
    padding: 0 var(--padding-side-lg) 3rem;
  }
`;

const ProjectContainer = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  max-width: 550px;
  position: relative;

  @media (min-width: 1000px) {
    width: 50%;

    & > img {
      padding: 0 2rem 0 0;
    }
  }
`;

const MobileImg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30%;

  @media (min-width: 1000px) {
    right: 3rem;
  }
`;

const TextContainer = styled.div`
  max-width: 700px;

  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

const Project = () => {
  const params = useParams();

  const [project, isLoading, isError] = useSingleProject(params.project);

  let desktopIndex;
  if (!isLoading) {
    desktopIndex = project.images.findIndex((obj) => obj.title.includes("desktop"));
  }

  if (isError)
    return (
      <Container>
        <p>Sorry there was an error fetching that project.</p>
        <LinkButton href="/">Go Back</LinkButton>
      </Container>
    );

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ProjectContainer>
            <ImageContainer>
              <img src={project.images[desktopIndex].file.url} alt={project.images[desktopIndex].description} />
              <MobileImg>
                <img src={project.images[1 - desktopIndex].file.url} alt={project.images[1 - desktopIndex].description} />
              </MobileImg>
            </ImageContainer>
            <TextContainer>
              <h1>{project.name}</h1>
              <div>
                {project.tags.map((tag) => (
                  <Tag key={tag} tag={tag} />
                ))}
              </div>
              <p>{project.description}</p>
              <LinkContainer>
                <LinkButton internal={false} href={project.websiteLink}>
                  View website
                </LinkButton>
                <LinkButton internal={false} href={project.githubLink}>
                  View source code
                </LinkButton>
              </LinkContainer>
            </TextContainer>
          </ProjectContainer>
          <LinkButton href="/">Go Back</LinkButton>
        </>
      )}
    </Container>
  );
};

export default Project;
