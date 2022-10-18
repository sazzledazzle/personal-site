import styled from "styled-components";

const Button = styled.button`
  height: 3rem;
  width: 3rem;
  background-color: transparent;
  border: none;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (min-width: 700px) {
    display: none;
  }

  &:focus {
    outline: 1px solid var(--clr-focus);
  }
`;

const Hamburger = styled.span`
  display: block;
  position: relative;
  visibility: visible;

  &,
  &::before,
  &::after {
    width: 2rem;
    height: 1px;
    background: var(--clr-darkest);
    transition: transform 0.3s ease-in-out;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
  }

  &::before {
    bottom: 12px;
    transform: translateY(0) rotate(0deg);
  }

  &::after {
    top: 12px;
    transform: translateY(0) rotate(0deg);
  }

  &.open {
    visibility: hidden;
  }

  &.open::before {
    transform: translateY(12px) rotate(45deg);
    visibility: visible;
  }

  &.open::after {
    transform: translateY(-12px) rotate(-45deg);
    visibility: visible;
  }
`;

const MenuButton = ({ isOpen, setOpen }) => {
  return (
    <Button aria-controls="primary-nav" aria-expanded={isOpen} aria-label="Menu" onClick={() => setOpen()} type="button">
      <Hamburger className={isOpen && "open"}></Hamburger>
    </Button>
  );
};

export default MenuButton;
