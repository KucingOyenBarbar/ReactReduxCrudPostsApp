/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import HeaderNav from "./HeaderNav";

export default function Layout({ children }) {
  return (
    <>
      <HeaderNav />
      <main className="position-relative px-0 mx-0">
        {/* Rendered Component */}
        <Container>{children}</Container>
      </main>
    </>
  );
}
