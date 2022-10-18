import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import MenuButton from "./MenuButton";
import Navlinks from "./Navlinks";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: var(--clr-intro-bg);
  padding: 1.5rem calc(var(--padding-side-sm) - 0.5rem);
  position: relative;
  width: 100%;
  z-index: 5;
  max-width: var(--max-width);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 700px) {
    padding: 2rem var(--padding-side-sm);
    opacity: 0.9;
  }

  /* Don't fix header when mobile landscape */
  @media (min-width: 700px) and (orientation: portrait) {
    position: fixed;
    top: 0;
    left: 0;
  }

  @media (min-width: 1200px) {
    padding: 2rem var(--padding-side-lg);
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const Nav = styled.nav`
  display: block;

  @media (max-width: 699px) {
    background-color: var(--clr-nav-bg);
    width: 50%;
    max-width: 12.5rem;
    padding: 2.5rem 2.5rem;
    position: absolute;
    top: 6rem;
    right: 0;
    transform: translateX(110%);
    transition: 1s;

    &.open {
      transform: translateX(0);
    }
  }
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const width = useWindowSize();

  useEffect(() => {
    isOpen &&
      window.addEventListener("scroll", () => {
        setOpen(false);
      });

    if (width >= 700) setOpen(false);

    return () => {
      window.removeEventListener("scroll", () => setOpen(false));
    };
  }, [width, isOpen, setOpen]);

  return (
    <HeaderContainer>
      <MenuButton isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
      <Nav id="primary-nav" className={isOpen && "open"}>
        <Navlinks isOpen={isOpen} />
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
