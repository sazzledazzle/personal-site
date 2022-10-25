import Button from "./Button";
import styled from "styled-components";

const Form = styled.form`
  max-width: 800px;

  & input,
  textarea {
    background-color: var(--clr-lightest);
    border: none;
    display: block;
    padding: 0.25rem;
    width: 100%;
    margin-top: 0.5rem;
  }

  & input {
    margin-bottom: 0.5rem;
  }

  & textarea {
    margin-bottom: 1rem;
    resize: vertical;
  }

  & span {
    color: var(--clr-highlight);
  }

  @media (min-width: 700px) {
    & input,
    textarea {
      padding: 0.25rem 0.5rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    flex-direction: row;

    & > * {
      width: 100%;
    }

    & > div:first-child {
      margin-right: 0.5rem;
    }

    & > div:last-child {
      margin-left: 0.5rem;
    }
  }
`;

const ContactForm = () => {
  return (
    <Form name="contact" method="post" data-netlify="true" onSubmit="submit">
      <input type="hidden" name="form-name" value="contact" />
      <Container>
        <div>
          <label htmlFor="name">
            Your name <span>*</span>
          </label>
          <input type="text" name="name" id="name" placeholder="Insert your name here" required />
        </div>
        <div>
          <label htmlFor="email">
            Your email <span>*</span>
          </label>
          <input type="email" name="email" id="email" placeholder="email@example.com" required />
        </div>
      </Container>
      <label htmlFor="message">
        Message <span>*</span>
      </label>
      <textarea name="message" id="message" cols="50" rows="10" placeholder="How can I help?"></textarea>
      <Button type="submit" required>
        Send message
      </Button>
    </Form>
  );
};

export default ContactForm;
