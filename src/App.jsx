import { Routes, Route } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import ExploreDetail from "./containers/explore/ExploreDetail";
import ExploreIndex from "./containers/explore/ExploreIndex";

export default function App() {
  return (
    <ThemeProvider
      data-bs-theme="dark"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/explore">
            <Route index element={<ExploreIndex />}></Route>
            <Route path=":id" element={<ExploreDetail />}></Route>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
