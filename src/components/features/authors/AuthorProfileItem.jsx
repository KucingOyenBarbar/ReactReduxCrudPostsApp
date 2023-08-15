/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";

export default function AuthorProfileItem({ name }) {
  return (
    <Card body className="shadow-none mb-3">
      <Card.Title className="text-start text-wrap text-capitalize text-white fst-normal fs-3 lh-1">
        Penulis
      </Card.Title>
      <hr className="text-secondary" />

      <div className="position-relative px-0 mx-0">
        <div className="d-flex justify-content-center mx-auto pt-3">
          <img
            data-bs-theme="dark"
            src="https://image.pngaaa.com/702/637702-middle.png"
            className="rounded-pill"
            width={250}
            height={250}
            alt="Profile"
          />
        </div>
        <div className="d-flex justify-content-center mx-auto py-3">
          <h3 className="text-start text-white text-capitalize fst-italice fs-3">
            {name}
          </h3>
        </div>

        <div className="d-flex justify-content-start">
          <p className="text-start text-white-50 fst-normal fs-6">
            Halo, saya {name} seseorang penulis sebuah artikel yang menarik.
            Saat ini saya sudah menulis 10 artikel.
          </p>
        </div>
      </div>
    </Card>
  );
}
