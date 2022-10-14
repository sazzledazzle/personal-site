import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background-color: var(--clr-intro-bg);
  & h1 {
    color: var(--clr-intro-header);
    padding: 2rem 0;
    font-size: 96px;
    font-size: clamp(3.75rem, -0.577rem + 19.78vw, 6rem);
    line-height: 1.2;

    & span {
      color: var(--clr-text);
      display: block;
      font-family: var(--ff-main);
      font-size: 48px;
      font-size: clamp(1.25rem, -0.19156rem + 6.59vw, 2rem);
      margin-left: clamp(8rem, -1.615rem + 43.956vw, 13rem);
      line-height: 1;
    }
  }

  & h2 {
    color: var(--clr-intro-header);
  }
`;

const Intro = () => {
  return (
    <Section aria-label="intro">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Hey,
        <br />
        I'm Sarah.
        <motion.span initial={{ y: -350, rotate: 45 }} animate={{ y: [-350, -100, -120, 0], rotate: [45, 20, 0] }} transition={{ duration: 1, type: "spring", time: [0, 0.6, 0.7, 1] }}>
          Frontend Developer
        </motion.span>
      </motion.h1>
      <p>Something something else</p>
    </Section>
  );
};

export default Intro;
