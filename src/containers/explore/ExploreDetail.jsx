import AuthorProfileItem from "../../components/features/authors/AuthorProfileItem";
import Commentitem from "../../components/features/comments/CommentItem";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import PostSingleItem from "../../components/features/posts/PostSingleItem";

export default function ExploreDetail() {
  const { id } = useParams();
  const postId = Number(id);

  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === postId)
  );

  const user = useSelector((state) =>
    state.users.find((user) => user.id === Number(post.userId))
  );

  const renderedContent = !post ? (
    <div className="d-flex justify-content-center mx-0">
      <p className="text-start text-white-50 fst-normal fs-6">
        Postingan Tidak Ditemukan.
      </p>
    </div>
  ) : (
    <>
      <PostSingleItem title={post?.title} body={post?.body} />
      <Commentitem />
      <AuthorProfileItem name={user?.name} />
    </>
  );

  return (
    <Row className="justify-content-start align-content-start g-2 py-5">
      <Col>
        <div>
          <Link
            to="/explore"
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
          <hr className="text-secondary" />
        </div>

        <Row className="justify-content-center align-content-center g-2 py-5">
          <Col lg={8}>{renderedContent}</Col>
        </Row>
      </Col>
    </Row>
  );
}
