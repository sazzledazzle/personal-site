import styled from "styled-components";

const Section = styled.section`
  background-color: var(--clr-tools-bg);
  padding: 5.5rem var(--padding-side-sm) 5rem;
  position: relative;

  & h2 {
    color: var(--clr-tools-header);
    font-size: 1.625rem;
    margin-bottom: 2rem;
  }

  & ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, 4.5rem);
    grid-gap: 1.5rem;
  }

  @media (min-width: 700px) {
    padding: 7rem var(--padding-side-sm) 5rem;

    & h2 {
      font-size: var(--fs-700);
    }

    & ul {
    grid-template-columns: repeat(auto-fill, 5rem);
    }
  }

  @media (min-width: 1200px) {
    padding: 10rem var(--padding-side-lg) 6rem;

    & ul {
    grid-template-columns: repeat(auto-fill, 6rem);
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -3.125rem;
    background-color: var(--clr-portfolio-bg);
    height: 5.5rem;
    width: 100%;
    transform: skewY(6deg);

    @media (min-width: 700px) {
      height: 8rem;
      top: -4rem;
    }

    @media (min-width: 1200px) {
      height: 14rem;
      top: -6.5rem;
    }
`;

const Li = styled.li`
  background-color: var(--clr-tools-tech);
  border: 1px solid var(--clr-tools-tech-border);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.5rem;
  width: 4.5rem;
  text-align: center;

  ${
    "" /* margin-top: ${(props) => props.randomMarginTop};
  margin-left: ${(props) => props.randomMarginLeft}; */
  }

  @media (min-width: 700px) {
    height: 5rem;
    width: 5rem;
  }

  @media (min-width: 1200px) {
    height: 6rem;
    width: 6rem;
  }
`;

const Tools = () => {
  const tech = ["HTML5", "CSS3", "Javascript", "ES6+", "React", "RESTful APIs", "Tailwind CSS", "Sass", "Svelte", "Node.js", "Express", "MongoDB", "Netlify", "Vercel", "Figma", "GitHub", "VS Code", "Affinity Suite"];

  return (
    <Section aria-labelledby="tools">
      <h2 id="tools">Tools & Technologies</h2>
      <ul>
        {tech.map((tool) => (
          <Li key={tool} randomMarginTop={`${Math.random() * 2}rem`} randomMarginLeft={`${Math.random() * 2}rem`}>
            {tool}
          </Li>
        ))}
      </ul>
    </Section>
  );
};

export default Tools;
