import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--clr-footer);
  color: var(--clr-footer-text);
  font-size: 0.75rem;
  padding: 2rem;
  text-align: center;

  @media (min-width: 1200px) {
    font-size: 1rem;
    padding: 3rem;
  }

  & a {
    text-decoration-color: var(--clr-footer-underline);
    text-underline-offset: 3px;
  }
`;

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterContainer>
      <p>&#169; {year} Sarah Clements. All rights reserved.</p>
      <p>
        Powered by <a href="https://reactjs.org/">React</a>, <a href="https://www.contentful.com/">Contentful</a> and <a href="https://www.netlify.com/">Netlify</a>.
      </p>
      <p>
        <a href="#">View source code</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
