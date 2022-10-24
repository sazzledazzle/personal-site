import styled from "styled-components";

const NavList = styled.ul`
  line-height: 1;
  text-transform: uppercase;

  & a {
    color: var(--clr-lightest);
    font-size: var(--fs-450);
    text-decoration: none;
  }

  & li + li {
    margin-top: 2rem;
  }

  @media (min-width: 700px) {
    display: flex;
    justify-content: flex-end;

    & li + li {
      margin-left: 2rem;
      margin-top: unset;
    }

    & a {
      color: var(--clr-darkest);
      font-size: var(--fs-400);
      position: relative;
    }

    & a::after {
      content: "";
      position: absolute;
      left: 0;
      top: 1.1rem;
      height: 1px;
      width: 0;
      background-color: var(--clr-hover);
      transition: width 0.5s;
    }

    & a:hover::after {
      width: 100%;
    }
  }

  @media (min-width: 1200px) {
    font-size: var(--fs-450);

    & li + li {
      margin-left: 3rem;
    }
  }
`;

const Navlinks = ({ isOpen }) => {
  return (
    <NavList>
      <li>
        <a href="/" tabIndex={isOpen ? "0" : "-1"}>
          Home
        </a>
      </li>
      <li>
        <a href="/#portfolio" tabIndex={isOpen ? "0" : "-1"}>
          Portfolio
        </a>
      </li>
      <li>
        <a href="/#about" tabIndex={isOpen ? "0" : "-1"}>
          My Story
        </a>
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
