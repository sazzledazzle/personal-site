import styled from "styled-components";

const ButtonOutline = styled.button`
  background-color: rgba(var(--clr-button-bg), 0);
  border: 1px solid var(--clr-button-border);
  color: var(--clr-darkest);
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover {
    background-color: rgba(var(--clr-button-bg), 1);
    cursor: pointer;
  }
`;

const Button = ({ children, type = "button" }) => {
  return <ButtonOutline type={type}>{children}</ButtonOutline>;
};

export default Button;
