import styled from "styled-components";

const ButtonOutline = styled.button`
  background-color: var(--clr-button-bg);
  border: 1px solid var(--clr-highlight);
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
`;

const Button = ({ children, type = "button" }) => {
  return <ButtonOutline type={type}>{children}</ButtonOutline>;
};

export default Button;
