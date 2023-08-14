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
      {/* Rendering Components */}
      <Layout>
        <PostContainer />
      </Layout>
    </ThemeProvider>
  );
}
