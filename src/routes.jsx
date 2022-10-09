import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ContestPage from "./pages/ContestPage";
import FreePage from "./pages/FreePage";
import PlusPage from "./pages/PlusPage";
import PrimePage from "./pages/PrimePage";
import RankPage from "./pages/RankPage";
import MybookPage from "./pages/MybookPage";

export const HOEM_PATH = "/";
export const CONTEST_PATH = "/contest";
export const FREE_PATH = "/free";
export const PLUS_PATH = "/plus";
export const PRIME_PATH = "/prime";
export const RANK_PATH = "/rank";
export const MYBOOK_PATH = "/mybook";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path={CONTEST_PATH} element={<ContestPage />}></Route>
      <Route path={FREE_PATH} element={<FreePage />}></Route>
      <Route path={PLUS_PATH} element={<PlusPage />}></Route>
      <Route path={PRIME_PATH} element={<PrimePage />}></Route>
      <Route path={RANK_PATH} element={<RankPage />}></Route>
      <Route path={MYBOOK_PATH} element={<MybookPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
