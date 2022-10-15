import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const baseStyles = css`
  background-color: transparent;
  border: 1px solid var(--clr-highlight);
  padding: 0.5rem 0.75rem;
  text-transform: uppercase;
  text-decoration: none;
`;

const InternalLink = styled(Link)`
  ${baseStyles}
`;

const ExternalLink = styled.a`
  ${baseStyles}
`;

const LinkButton = ({ internal = true, href, children }) => {
  if (internal) return <InternalLink to={href}>{children}</InternalLink>;

  return (
    <ExternalLink href={href} target="_blank">
      {children}
    </ExternalLink>
  );
};

export default LinkButton;
