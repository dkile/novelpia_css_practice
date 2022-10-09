import { css } from "@emotion/react";

import {
  CONTEST_PATH,
  FREE_PATH,
  PLUS_PATH,
  PRIME_PATH,
  RANK_PATH,
  MYBOOK_PATH,
} from "../../../routes";

import assets from "../../../config/assets";
import NavItem from "./NavItem";

const MainNav = () => {
  const { contest, free, plus, prime, rank, mybook } = assets;

  return (
    <div
      css={css`
        width: 44.5rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <NavItem url={CONTEST_PATH}>{contest.label}</NavItem>
      <NavItem url={FREE_PATH}>{free.label}</NavItem>
      <NavItem url={PLUS_PATH}>{plus.label}</NavItem>
      <NavItem url={PRIME_PATH}>{prime.label}</NavItem>
      <NavItem url={RANK_PATH}>{rank.label}</NavItem>
      <NavItem url={MYBOOK_PATH}>{mybook.label}</NavItem>
    </div>
  );
};

export default MainNav;
