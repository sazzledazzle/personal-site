import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Container = styled.div`
  border: 1px solid var(--clr-button-border);
  padding: 0.5rem 0.75rem;
  width: fit-content;
  background-color: rgba(var(--clr-button-bg), 0);
  transition: 0.3s;

  &:hover {
    background-color: rgba(var(--clr-button-bg), 0.5);
  }
`;

const baseStyles = css`
  text-transform: uppercase;
  text-decoration: none;
`;

const InternalLink = styled(Link)`
  ${baseStyles}
`;

const ExternalLink = styled.a`
  ${baseStyles}
`;

const LinkButton = ({ internal = true, href, children, className }) => {
  if (internal)
    return (
      <Container className={className}>
        <InternalLink to={href}>{children}</InternalLink>
      </Container>
    );

  return (
    <Container>
      <ExternalLink href={href} target="_blank">
        {children}
      </ExternalLink>
    </Container>
  );
};

export default LinkButton;
