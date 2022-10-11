import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Tools from "../components/Tools";
import About from "../components/About";
import Contact from "../components/Contact";
import styled from "styled-components";

const Main = styled.main`
  @media (min-width: 700px) {
    margin-top: 7rem;
  }

  @media (min-width: 1200px) {
    margin-top: 8.125rem;
  }
`;

const Home = () => {
  return (
    <Main>
      <Intro />
      <div id="portfolio">
        <Portfolio />
        <Tools />
      </div>
      <About />
      <Contact />
    </Main>
  );
};

export default Home;
