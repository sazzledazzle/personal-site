import image1 from "../assets/images/about-machu-picchu.jpg";
import styled from "styled-components";

const Section = styled.section`
  background-color: var(--clr-about-bg);
  padding: 2rem var(--padding-side-sm) 6rem;
  position: relative;

  & h2 {
    color: var(--clr-about-header);
  }

  & p {
    max-width: 1200px;
    padding-top: 1rem;
  }

  @media (min-width: 1200px) {
    padding: 3rem var(--padding-side-lg) 6rem;

    & p {
      padding-top: 1.5rem;
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -4.875rem;
    height: 5rem;
    width: 100%;
    background-color: var(--clr-about-bg);
    clip-path: polygon(63% 41%, 0% 100%, 100% 100%);
    z-index: 1;
  }
`;

const Img = styled.div`
  margin: 2rem 10% 0;

  & img {
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    margin: 0 auto;
  }
`;

const About = () => {
  return (
    <Section id="about" aria-labelledby="aboutme">
      <h2 id="aboutme">My Story</h2>
      <p>
        After more than 10 years working in the financial services sector, I took an extended career break to find a new challenge and direction. At the end of 2019 the project I was working on concluded and I decided not to take up an offer of starting a new contract immediately. I was not
        unfamiliar with taking a break from my career to travel - in 2010-2011 I backpacked around South East Asia, worked on a farm in Australia and travelled to New Zealand. I spent 2015 hiking up volcanoes, scuba diving, and attempting to learn Spanish in South and Central America. This time
        around I had plans to take a few weeks off and then go on a trip to Japan. With the uncertainty at the beginning of 2020 I delayed the trip, and then we all know what happened next.
      </p>
      <p>
        I wasn’t feeling fulfilled or happy in my career direction and I instead became determined to make a change into something that ignited passion in me, rather than something I had to escape from to find that. I discovered a love for web development, mostly focused on the frontend. I enjoy the
        mix of design and creativity, and technical skill; I enjoy the struggle and the satisfaction of figuring something out.
      </p>
      <p>
        I have been predominantly working in React, but like to try other frameworks such as Svelte. I'm focussed on the details and relish making CSS pixel-perfect in all browsers. I love to build fast, accessible web applications with smooth user experiences. I also have some knowledge of the
        backend using Express, creating RESTful APIs and MongoDB, and have been working with the MERN stack. Next I am looking to dig deeper into TypeScript more and learn Framer Motion, an animation library for React.
      </p>
      <p>Aside from travel, and code, I love to eat street food (any food actually), drink beer, cook, and go to what is still my favourite place on earth, Glastonbury festival.</p>
      <p>After a little longer than I would have liked, I feel excited, reinvigorated and determined to dive into a new career path in web development. One that is rewarding and doesn’t have me dreaming of being somewhere else; One that I chose rather than one I fell into.</p>
      <Img>
        <img src={image1} alt="Sarah at Machu Picchu in Peru" />
      </Img>
    </Section>
  );
};

export default About;
