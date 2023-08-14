/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import HeaderNav from "./HeaderNav";

export default function Layout() {
  return (
    <>
      <HeaderNav />
      <main className="position-relative px-0 mx-0">
        {/* Rendered Component */}
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
