/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
("react");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ButtonBack({ title, link }) {
  return (
    <div>
      <Link
        to={link}
        aria-label={title}
        title={title}
        className="text-white link-offset-2 link-underline link-underline-opacity-0"
      >
        <span className="d-inline me-2">
          {" "}
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
        <span className="d-inline">{title}</span>
      </Link>
    </div>
  );
}
