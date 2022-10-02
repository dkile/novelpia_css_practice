import { css } from "@emotion/react";

import AdultSwitch from "./AdultSwitch";

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
        <img src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/logo_02.png" />
        <AdultSwitch />
      </div>
      <div className="header-novel-nav"></div>
      <div className="header-profile-nav"></div>
    </header>
  );
};

export default Header;
