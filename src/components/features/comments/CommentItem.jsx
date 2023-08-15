import { Card } from "react-bootstrap";

export default function CommentItem() {
  return (
    <Card body className="shadow-none mb-3">
      <Card.Title className="text-start text-wrap text-capitalize text-white fst-normal fs-3">
        Komentar (5)
      </Card.Title>

      <div className="position-relative d-flex justify-content-center g-2 py-3">
        <div className="text-start text-capitalize text-white-50 fst-normal fs-6">
          Belum Ada Komentar.
        </div>
      </div>

      <div className="position-relative px-0 mx-0"></div>
    </Card>
  );
}
