import { css } from "@emotion/react";

import { Header, Footer } from "../components/commons";

const Layout = (props) => {
  const mainCss = css`
    width: 100%;
  `;

  return (
    <>
      <Header />
      <main css={mainCss}>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
