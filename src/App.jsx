import { css } from "@emotion/react";

import AppRoutes from "./routes";

const wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

function App() {
  return (
    <div css={wrapper}>
      <AppRoutes />
    </div>
  );
}

export default App;
