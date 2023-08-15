import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import PostHeadingTitle from "../../components/features/posts/PostHeadingTitle";
import PostInputForm from "../../components/features/posts/PostInput";
import { addNewPosts } from "../../utils/lib/fetchPostData";

export default function PostNew() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddPostsHandler = ({ title, content, userId }) => {
    dispatch(addNewPosts({ title, body: content, userId })).unwrap();
    navigate("/");
  };

  return (
    <Row className="justify-content-start align-content-start py-5">
      <Col>
        <div>
          <Link
            to="/posts"
            aria-label="Kembali Halaman Sebelumnya"
            title="Kembali Halaman Sebelumnya"
            className="text-white link-offset-2 link-underline link-underline-opacity-0"
          >
            <span className="d-inline me-2">
              {" "}
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            <span className="d-inline">Kembali</span>
          </Link>
        </div>
        <PostHeadingTitle title={`Buat postingan terbaru`} />
        <hr className="text-secondary" />

        <PostInputForm AddPosts={onAddPostsHandler} />
      </Col>
    </Row>
  );
}
