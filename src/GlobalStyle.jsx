import { Global, css } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap");
        * {
          margin: 0;
          padding: 0;
          font-family: "Noto Sans KR", "sans-serif";
          color: inherit;
        }
        *,
        :after,
        :before {
          box-sizing: border-box;
          flex-shrink: 0;
        }
        ::-webkit-scrollbar {
          display: none;
          width: 0 !important;
        }
        #root {
          -webkit-tap-highlight-color: transparent;
          -webkit-text-size-adjust: 100%;
          text-size-adjust: 100%;
          cursor: default;
          line-height: 1.5;
          overflow-wrap: break-word;
          word-break: break-all;
          tab-size: 4;
          height: 100%;
        }
        html,
        body {
          font-size: 10px;
          height: 100%;
        }
        img,
        picture,
        video,
        canvas,
        svg {
          max-width: 100%;
          vertical-align: middle;
        }
        button {
          background: none;
          border: 0;
          cursor: pointer;
        }
        a {
          text-decoration: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }
        span,
        p {
          vertical-align: baseline;
        }
      `}
    />
  );
};

export default GlobalStyle;
