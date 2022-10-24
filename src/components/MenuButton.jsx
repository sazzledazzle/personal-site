import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 3rem;
  margin-left: auto;
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
    background: var(--clr-darkest);
    height: 1px;
    width: 2rem;
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
