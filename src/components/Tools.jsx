import styled from "styled-components";

const Section = styled.section`
  background-color: var(--clr-tools-bg);
  min-height: 50vh;

  & h2 {
    color: var(--clr-tools-header);
    margin-bottom: 2rem;
  }

  & ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

const Li = styled.li`
  background-color: rgba(250, 227, 217, 0.2);
  border: 1px solid #fae3d9;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  text-align: center;
  height: 4.5rem;
  width: 4.5rem;
  margin-top: ${(props) => props.randomMarginTop};
  margin-left: ${(props) => props.randomMarginLeft};
`;

const Tools = () => {
  const tech = ["HTML", "CSS", "Javascript", "React", "RESTful APIs", "Tailwind CSS", "Sass", "Svelte", "Figma", "GitHub"];

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
