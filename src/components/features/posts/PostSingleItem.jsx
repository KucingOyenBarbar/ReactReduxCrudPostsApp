/* eslint-disable react/prop-types */
import { Card, Stack } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

export default function PostSingleItem({ title, body }) {
  return (
    <Card body className="rounded shadow-none mb-3">
      <Card.Title className="text-start text-wrap text-capitalize text-white fst-normal fs-3 ">
        {title}
      </Card.Title>
      <Card.Text className="text-start text-wrap text-white-50 fst-normal fs-5 pt-3">
        {body}
      </Card.Text>

      <div className="position-relative py-3">
        <Stack direction="horizontal" gap={2}>
          <button
            type="button"
            title="Sukai postingan ini"
            className="btn btn-secondary btn-md text-white rounded-pill"
          >
            <span className="d-inline me-2">
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>

            <span className="d-inline me-2">100</span>
          </button>
          <button
            type="button"
            title="Tidak menyukai postingan ini"
            className="btn btn-secondary btn-md text-white rounded-pill"
          >
            <span className="d-inline me-2">
              <FontAwesomeIcon icon={faThumbsDown} />
            </span>
            <span className="d-inline me-2"></span>
          </button>
        </Stack>
      </div>
    </Card>
  );
}
