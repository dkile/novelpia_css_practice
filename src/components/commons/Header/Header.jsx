import { css } from "@emotion/react";
import { Link } from "react-router-dom";

import { HOEM_PATH } from "../../../routes";

import AdultSwitch from "./AdultSwitch";
import MainNav from "./MainNav";
import SubNav from "./SubNav";

const Header = () => {
  return (
    <header
      css={css`
        position: sticky;
        top: 0;
        z-index: 999;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 8.8rem;
        background-color: #fff;
        box-shadow: 0px 0px 5px #33333333;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          max-width: 120rem;
          width: 100%;
          height: 100%;
        `}
      >
        <div
          css={css`
            padding-left: 3rem;
            display: flex;
            align-items: center;
            height: 100%;
          `}
        >
          <Link to={HOEM_PATH}>
            <img src="https://novelpia-clone.s3.ap-northeast-2.amazonaws.com/image/logo_02.png" />
          </Link>
          <AdultSwitch />
        </div>
        <div
          css={css`
            display: flex;
            justify-content: flex-start;
            flex-shrink: 2;
            width: 80rem;
            height: 100%;
            padding-left: 5rem;
            padding-top: 0.8rem;
          `}
        >
          <MainNav />
        </div>
        <div
          css={css`
            width: 19rem;
            height: 100%;
            padding-top: 0.5rem;
          `}
        >
          <SubNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
