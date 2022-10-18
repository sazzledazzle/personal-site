import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Tools from "../components/Tools";
import About from "../components/About";
import Contact from "../components/Contact";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  z-index: 1;
`;

const Home = () => {
  return (
    <main>
      <Intro />
      <Container id="portfolio">
        <Portfolio />
        <Tools />
      </Container>
      <About />
      <Contact />
    </main>
  );
};

export default Home;
