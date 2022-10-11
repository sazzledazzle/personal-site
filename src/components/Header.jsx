import styled from "styled-components";
import { useState } from "react";
import MenuButton from "./MenuButton";

const HeaderContainer = styled.header`
  background-color: var(--clr-intro-bg);
  padding: var(--padding-side-sm);
  width: 100%;

  @media (min-width: 700px) {
    padding: var(--padding-side-md);
  }

  /* Don't fix header when mobile landscape */
  @media (min-width: 700px) and (orientation: portrait) {
    position: fixed;
    top: 0;
    left: 0;
  }

  @media (min-width: 1200px) {
    padding: 3.5rem var(--padding-side-lg);
    position: fixed;
    top: 0;
    left: 0;
  }
`;

const Nav = styled.nav`
  display: block;

  @media (max-width: 699px) {
    display: none;
    background-color: var(--clr-nav-bg);
    width: 50%;
    max-width: 12.5rem;
    padding: 2.5rem 1.5rem;
    position: absolute;
    top: 4rem;
    right: var(--padding-side-sm);

    &.open {
      display: block;
    }
  }
`;

const Ul = styled.ul`
  line-height: 1;
  text-transform: uppercase;

  & a {
    color: var(--clr-lightest);
    text-decoration: none;
  }

  & li + li {
    margin-top: 1.5rem;
  }

  @media (min-width: 700px) {
    display: flex;
    justify-content: end;

    & li + li {
      margin-top: unset;
      margin-left: 2rem;
    }

    & a {
      color: var(--clr-darkest);
    }
  }

  @media (min-width: 1200px) {
    font-size: 1.125rem;

    & li + li {
      margin-left: 3rem;
    }
  }
`;

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <MenuButton isOpen={isOpen} setOpen={() => setOpen(!isOpen)} />
      <Nav id="primary-nav" className={isOpen && "open"}>
        <Ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
