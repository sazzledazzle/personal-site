import styled from "styled-components";

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: none;
`;

const Button = styled.button`
  height: 2rem;
  width: 2rem;
  background-color: transparent;
  text-align: center;
  margin-left: auto;
  border: 1px solid black;
  display: block;

  @media (min-width: 700px) {
    display: none;
  }
`;

const MenuButton = ({ isOpen, setOpen }) => {
  return (
    <>
      <Background></Background>
      <Button aria-controls="primary-nav" aria-expanded={isOpen} onClick={() => setOpen()} type="button">
        X
      </Button>
    </>
  );
};

export default MenuButton;
