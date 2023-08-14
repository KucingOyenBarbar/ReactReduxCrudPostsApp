/* eslint-disable react/prop-types */
import { Col, Row } from "react-bootstrap";
import PostItem from "./PostItem";
import PostHeadingTitle from "./PostHeadingTitle";

export default function PostItemList({ posts }) {
  const renderedContent = posts.length ? (
    posts.map((post, index) => <PostItem key={index} {...post} />)
  ) : (
    <div className="d-flex justify-content-center g-2">
      <p className="text-white-50 fst-normal">Belum Ada Postingan.</p>
    </div>
  );

  return (
    <Row className="justify-content-center g-2">
      <Col lg={7}>
        <PostHeadingTitle title={`${posts.length} postingan`} />
        {renderedContent}
      </Col>
    </Row>
  );
}
