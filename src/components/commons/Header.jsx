import { css } from "@emotion/react";

const Header = () => {
  return (
    <header
      css={css`
        position: sticky;
        display: flex;
        align-items: center;
        max-width: 80rem;
        height: 5.5rem;
      `}
    >
      <div>
        <img src="" alt="" />
        <div className="adult-toggle"></div>
      </div>
      <div className="header-novel-nav"></div>
      <div className="header-profile-nav"></div>
    </header>
  );
};

export default Header;
