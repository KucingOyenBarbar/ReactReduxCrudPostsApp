/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  getPostsError,
  getPostsStatus,
  selectAllPosts,
} from "../../store/reducers/postReducer";
import PostItemList from "../../components/features/posts/PostItemList";
import PostSearchItem from "../../components/features/posts/PostSearchItem";
import PostMessage from "../../components/features/posts/PostMessage";

export default function PostIndex() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  // Set initial state
  const [searchValues, setSearchValues] = useState("");

  const renderedContent =
    postsStatus === "loading" ? (
      <PostMessage message="Sedang memuat..." />
    ) : postsStatus === "failed" ? (
      <PostMessage message={postsError} />
    ) : postsStatus === "succeeded" ? (
      searchValues ? (
        <PostItemList
          posts={posts
            .filter((filteredData) =>
              filteredData.title
                .toLowerCase()
                .includes(searchValues.toLowerCase())
            )
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date))}
        />
      ) : (
        <PostItemList
          posts={posts.slice().sort((a, b) => b.date.localeCompare(a.date))}
        />
      )
    ) : null;

  return (
    <Row className="justify-content-start align-content-start py-5">
      <Col>
        <Row className="justify-content-center g-2 py-3">
          <Col lg={7}>
            <div className="d-flex justify-content-end g-2">
              <Link
                title="Buat Postingan Baru"
                to={"/posts/new"}
                className="btn btn-md rounded text-center text-white fst-normal fs-5 mb-3"
                style={{
                  backgroundColor: "#4c0bce",
                }}
              >
                Buat Postingan Baru
              </Link>
            </div>

            <PostSearchItem
              title="Cari..."
              search={searchValues}
              setSearch={setSearchValues}
            />
            {renderedContent}
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
