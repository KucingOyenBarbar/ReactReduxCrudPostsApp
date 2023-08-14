/* eslint-disable react/prop-types */

import { Col, Row, Form } from "react-bootstrap";

export default function PostSearchItem({ title, search, setSearch }) {
  return (
    <Row className="justify-content-start g-2 pt-3">
      <Col>
        <Form onSubmit={(e) => e.preventDefault()} data-bs-theme="dark">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label hidden>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder={title}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
}
