import ContactForm from "./ContactForm";
import styled from "styled-components";

const Section = styled.section`
  background-color: var(--clr-contact-bg);
  min-height: calc(100vh - 7.375rem);

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
