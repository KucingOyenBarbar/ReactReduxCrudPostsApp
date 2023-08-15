/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Row, Col, Card, Form, Button, Stack } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function PostInputForm({ AddPosts, setShowInputForm }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [limitKarakter, setLimiterKarakter] = useState(100);

  const users = useSelector((state) => state.users);

  const onTitleChangeEventHandler = (e) => {
    setTitle(e.target.value);
  };

  const onContentChangeEventHandler = (e) => {
    setContent(e.target.value);
  };

  const onPostUserChangeEventHandler = (e) => {
    parseInt(setUserId(e.target.value));
  };

  const disabledButton =
    Boolean(title.length) && Boolean(userId) && Boolean(content.length);

  const onResetAllValues = () => {
    setTitle("");
    setContent("");
    setUserId("");
  };

  const onSubmitValuesHandler = (e) => {
    e.preventDefault();
    AddPosts({ title, content, userId });
    // Clear fields form
    setTitle("");
    setContent("");
  };

  return (
    <Row className="justify-content-center align-content-center py-5">
      <Col lg={7} md={10}>
        <Card body className="rounded mb-3">
          <Card.Title className="text-start text-capitalize fst-normal fs-4">
            Form Tambah Postingan Baru
          </Card.Title>
          <hr className="text-secondary"></hr>
          <Form onSubmit={onSubmitValuesHandler} onReset={onResetAllValues}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Judul Postingan{" "}
                <span className="text-danger">
                  ( Sisa Karakter {limitKarakter - title.length} )
                </span>
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Tuliskan judul postingan"
                value={title}
                onChange={onTitleChangeEventHandler}
                maxLength={title.length <= limitKarakter ? limitKarakter : 0}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Penulis </Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={onPostUserChangeEventHandler}
              >
                <option value="" hidden>
                  Pilih Penulis
                </option>
                {users?.map((user, index) => (
                  <option key={index} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Tuliskan isi postingan..."
                value={content}
                onChange={onContentChangeEventHandler}
              />
            </Form.Group>

            <Stack gap={3} direction="vertical" className="mb-3">
              <Button
                disabled={!disabledButton}
                variant="primary"
                type="submit"
                className="d-block w-100 text-center fst-normal fs-6"
              >
                Posting
              </Button>
              <Button
                // onClick={() =>
                //   setTimeout(() => {
                //     setShowInputForm(false);
                //   }, 300)
                // }

                variant="danger"
                type="reset"
                className="d-block w-100 text-center fst-normal fs-6"
              >
                Batalkan
              </Button>
            </Stack>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
