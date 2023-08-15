/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
} from "../../store/reducers/postReducer";
import PostHeadingTitle from "../../components/features/posts/PostHeadingTitle";
import PostItemList from "../../components/features/posts/PostItemList";
import PostSearchItem from "../../components/features/posts/PostSearchItem";
import PostMessage from "../../components/features/posts/PostMessage";
import ButtonBack from "../../components/ButtonBack";

export default function ExploreIndex() {
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
        <ButtonBack title="Kembali" link="/" />
        <PostHeadingTitle title={`Jelajahi ${posts.length} postingan`} />
        <hr className="text-secondary" />
        <Row className="justify-content-center g-2 py-3">
          <Col lg={7}>
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
