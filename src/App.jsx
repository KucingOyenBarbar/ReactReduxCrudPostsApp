import { Routes, Route } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Layout from "./components/Layout";
import Home from "./containers/Home";
import ExploreDetail from "./containers/explore/ExploreDetail";
import ExploreIndex from "./containers/explore/ExploreIndex";
import PostIndex from "./containers/posts/PostIndex";
import PostNew from "./containers/posts/PostNew";
import PostPreview from "./containers/posts/PostPreview";
import PostEdit from "./containers/posts/PostEdit";

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
          <Route path="explore">
            <Route index element={<ExploreIndex />} />{" "}
            <Route path=":id" element={<ExploreDetail />} />
          </Route>

          <Route path="posts">
            <Route index element={<PostIndex />} />
            <Route path="new" element={<PostNew />} />
            <Route path=":id/preview" element={<PostPreview />} />
            <Route path=":id/edit" element={<PostEdit />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
