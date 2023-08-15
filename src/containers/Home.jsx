import { Row, Col } from "react-bootstrap";
import Sayhello from "../components/SayHello";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Row className="justify-content-start g-2">
      <Col>
        <Sayhello message="Halo Selamat Datang Di Aplikasi Redux Blog" />

        <Link
          to={"/explore"}
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          Explore
        </Link>
        <Link
          to={"/posts"}
          className="link-offset-2 link-underline link-underline-opacity-0"
        >
          Explore
        </Link>
      </Col>
    </Row>
  );
}
