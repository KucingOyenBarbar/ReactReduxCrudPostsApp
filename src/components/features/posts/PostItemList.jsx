/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";
import PostItem from "./PostItem";

export default function PostItemList({ posts }) {
  const renderedContent = posts.length ? (
    <>
      <Row className="justify-content-start g-2 pt-3">
        <Col>
          {posts.map((post, index) => (
            <PostItem key={index} {...post} />
          ))}
        </Col>
      </Row>
    </>
  ) : (
    <div className="d-flex justify-content-center g-2 py-3">
      <p className="text-white-50 fst-normal">Belum Ada Postingan.</p>
    </div>
  );

  return renderedContent;
}
