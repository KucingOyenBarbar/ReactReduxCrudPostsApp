import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostHeadingTitle from "../../components/features/posts/PostHeadingTitle";
import PostItemList from "../../components/features/posts/PostItemList";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
} from "../../store/reducers/postReducer";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ExploreIndex() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  return (
    <Row className="justify-content-start align-content-start py-5">
      <Col>
        <div>
          <Link
            to="/"
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
        <PostHeadingTitle title={`Jelajahi ${posts.length} postingan`} />
        <hr className="text-secondary" />
        {postsStatus === "loading" ? (
          <div className="d-flex justify-content-center g-2">
            <p className="text-white-50 fst-normal">Loading.</p>
          </div>
        ) : postsStatus === "succeeded" ? (
          <PostItemList
            posts={posts.slice().sort((a, b) => b.date.localeCompare(a.date))}
          />
        ) : postsStatus === "failed" ? (
          <div className="d-flex justify-content-center g-2">
            <p className="text-white-50 fst-normal">{postsError}</p>
          </div>
        ) : null}
      </Col>
    </Row>
  );
}
