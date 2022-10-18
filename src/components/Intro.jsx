import ProfileImage from "./ProfileImage";
import LinkButton from "./LinkButton";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  background-color: var(--clr-intro-bg);
  padding-bottom: 4rem;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;

  & h1 {
    color: var(--clr-intro-header);
    font-size: 96px;
    font-size: clamp(3.4375rem, -0.10625rem + 16.2vw, 6rem);
    line-height: 1.2;

    & span {
      color: var(--clr-text);
      display: block;
      font-family: var(--ff-main);
      font-size: 48px;
      font-size: clamp(1.125rem, -0.08747rem + 4.743vw, 1.875rem);
      margin-left: clamp(8rem, -1.615rem + 43.956vw, 13rem);
      line-height: 1;
    }
  }

  & p {
    margin: 1.5rem 0;
  }

  @media (min-width: 700px) and (orientation: portrait) {
    margin-top: 5rem;
  }

  @media (min-width: 700px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0 4rem var(--padding-side-sm);

    & div:first-child {
      width: 60%;
      max-width: 500px;
    }

    & h1 {
      font-size: 4.125rem;

      & span {
        font-size: 1.25rem;
        margin-left: 10rem;
      }
    }
  }

  @media (min-width: 1200px) {
    margin-top: 5.125rem;
    padding: 0 var(--padding-side-sm) 4rem;

    & div:first-child {
      width: 55%;
      max-width: unset;
    }

    & h1 {
      font-size: 6rem;

      & span {
        font-size: 1.875rem;
        margin-left: 14rem;
      }
    }
  }
`;

const Link = styled(LinkButton)`
  margin-left: auto;

  @media (min-width: 700px) {
    margin-left: 0;
  }
`;

const ImgContainer = styled.div`
  width: 55%;
  position: relative;
  bottom: 2rem;

  @media (min-width: 700px) {
    width: 40%;
    padding-top: 1rem;
    bottom: -2rem;
  }

  @media (min-width: 1200px) {
    bottom: 2rem;
  }
`;

const Intro = () => {
  return (
    <Section aria-label="intro">
      <div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          Hey,
          <br />
          I'm Sarah.
          <motion.span initial={{ y: -350, rotate: 45 }} animate={{ y: [-350, -100, -120, 0], rotate: [45, 20, 0] }} transition={{ duration: 1, type: "spring", time: [0, 0.6, 0.7, 1] }}>
            Frontend Developer
          </motion.span>
        </motion.h1>
        <p>
          Once upon a time I dealt with banking complaints, now I code! I am a frontend developer based in London who loves to build fast, accessible, responsive web applications using the latest technologies. I appreciate beautiful things - from seeking out mind blowing landscapes on my travels to
          a stunningly simple, well designed web page with smart UI/UX.
        </p>
        <Link href="#about">Read my story</Link>
      </div>
      <ImgContainer>
        <ProfileImage />
      </ImgContainer>
    </Section>
  );
};

export default Intro;
