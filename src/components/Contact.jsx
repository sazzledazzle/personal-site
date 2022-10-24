import ContactForm from "./ContactForm";
import styled from "styled-components";

const Section = styled.section`
  background-color: var(--clr-contact-bg);
  min-height: calc(100vh - 7.5975rem);
  padding-bottom: 2rem;
  padding-top: 2rem;
  position: relative;

  & h2 {
    color: var(--clr-contact-header);
  }

  & p {
    margin: 1rem 0;
  }

  @media (min-width: 700px) {
    min-height: calc(100vh - 7rem - 7.375rem);
  }

  @media (min-width: 1200px) {
    min-height: calc(100vh - 8.125rem - 10.5rem);
    padding-bottom: 3rem;
    padding-top: 3rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: -3.625rem;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: var(--clr-contact-bg);
    z-index: 1;
    clip-path: polygon(100% 100%, 100% 100%, 0% 99%, 0% 99%, 0% 60%, 0% 60%, 28% 31%, 28% 31%, 52% 60%, 52% 60%, 79% 27%, 79% 27%, 100% 57%, 100% 57%);
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contact Me</h2>
      <p>Want to get in touch? Great! I'd love to hear from you. Just fill in the form and I'll get back to you as soon as possible.</p>
      <ContactForm />
    </Section>
  );
};

export default Contact;
