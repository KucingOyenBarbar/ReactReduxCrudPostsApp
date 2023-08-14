import { Routes, Route } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/Layout";
import PostContainer from "./containers/PostContainer";

export default function App() {
  return (
    <ThemeProvider
      data-bs-theme="dark"
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PostContainer />} />

          <Route path="/explore">
            <Route index element={<div>Explore</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
