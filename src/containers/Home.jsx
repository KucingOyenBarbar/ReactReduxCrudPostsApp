import { Row, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import Heading from "../components/Heading";
import Subheading from "../components/subheading";

export default function Home() {
  return (
    <Row className="justify-content-start g-2 py-5">
      <Col>
        <div className="mx-auto pt-3">
          <Heading title="Halo, Selamat Datang Di Aplikasi Redux Blog" />
          <Subheading title="Jelajahi, tambahkan semua postingan..." />
          <Stack gap={2} direction="horizontal" className="py-3">
            <Link
              to={"/explore"}
              className="btn btn-md rounded-pill"
              style={{ backgroundColor: "#4c0bce" }}
            >
              Jelajahi Semua Postingan
            </Link>
            <Link
              to={"/posts/new"}
              className="btn btn-md rounded-pill"
              style={{ backgroundColor: "#4c0bce" }}
            >
              Buat Postingan Baru
            </Link>
          </Stack>
        </div>
      </Col>
    </Row>
  );
}
