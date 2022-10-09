import { css } from "@emotion/react";

import assets from "../../../config/assets";
import NavItem from "./NavItem";

const SubNav = () => {
  const { alarm, writerRoom, search, myInformation } = assets;

  return (
    <div
      css={css`
        display: flex;
        width: 19rem;
        height: 100%;
        justify-content: space-between;
        align-items: center;
      `}
    >
      <NavItem url={""}>
        <img src={alarm.imgSrc} />
      </NavItem>
      <NavItem url={""}>
        <img src={writerRoom.imgSrc} />
      </NavItem>
      <NavItem url={""}>
        <img src={search.imgSrc} />
      </NavItem>
      <NavItem url={""}>
        <img
          css={css`
            width: 4rem;
            max-width: max-content;
            border-radius: 50%;
            margin-bottom: 0.3rem;
          `}
          src={myInformation.imgSrc}
        />
      </NavItem>
    </div>
  );
};

export default SubNav;
