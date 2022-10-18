import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  line-height: 1;
  text-transform: uppercase;

  & a {
    color: var(--clr-lightest);
    text-decoration: none;
    font-size: 1.125rem;
  }

  & li + li {
    margin-top: 2rem;
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
      font-size: 1rem;
    }
  }

  @media (min-width: 1200px) {
    font-size: 1.125rem;

    & li + li {
      margin-left: 3rem;
    }
  }
`;

const Navlinks = ({ isOpen }) => {
  return (
    <NavList>
      <li>
        <Link to="/" tabIndex={isOpen ? "0" : "-1"}>
          Home
        </Link>
      </li>
      <li>
        <a href="/#portfolio" tabIndex={isOpen ? "0" : "-1"}>
          Portfolio
        </a>
      </li>
      <li>
        <Link to="/#about" tabIndex={isOpen ? "0" : "-1"}>
          About me
        </Link>
      </li>
      <li>
        <a href="/#contact" tabIndex={isOpen ? "0" : "-1"}>
          Contact
        </a>
      </li>
    </NavList>
  );
};

export default Navlinks;
