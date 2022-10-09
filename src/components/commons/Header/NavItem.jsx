import { css } from "@emotion/react";

import { Link, useMatch } from "react-router-dom";

const navItem = css`
  font-size: 2.1rem;
  font-weight: 500;
`;

const activeNavItem = css`
  ${navItem};
  color: #5a35cd;
`;

const NavItem = ({ url, children }) => {
  const isActive = useMatch(url);
  return (
    <Link to={url} css={isActive ? activeNavItem : navItem}>
      {children}
    </Link>
  );
};

export default NavItem;
