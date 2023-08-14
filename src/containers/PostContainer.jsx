/* eslint-disable no-unused-vars */
import * as React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import PostItemList from "../components/features/posts/PostItemList";
import PostInput from "../components/features/posts/PostInput";

import {
  addPosts,
  getPostsError,
  getPostsStatus,
  postAdd,
  selectAllPosts,
} from "../store/reducers/postReducer";
import { nanoid } from "@reduxjs/toolkit";
import PostButton from "../components/features/posts/PostButton";
import { addNewPosts, fetchAllPosts } from "../utils/lib/fetchPostData";

export default function PostContainer() {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  React.useEffect(() => {
    postStatus === "idle" ? dispatch(fetchAllPosts()) : null;
  }, [postStatus, dispatch]);

  const [showInputForm, setShowInputForm] = React.useState(false);

  const onAddPostsHandler = ({ title, content, userId }) => {
    dispatch(addNewPosts({ title, body: content, userId })).unwrap();
    // dispatch(
    //   postAdd({
    //     id: nanoid(),
    //     userId,
    //     title,
    //     content,
    //     reactions: {
    //       thumbsUp: 0,
    //       wow: 0,
    //       heart: 0,
    //       rocket: 0,
    //       coffee: 0,
    //     },
    //     date: new Date().toISOString(),
    //   })
    // );
  };

  return (
    <>
      <Row className="justify-content-start align-content-start py-5">
        <Col>
          {showInputForm ? (
            <PostInput
              AddPosts={onAddPostsHandler}
              setShowInputForm={setShowInputForm}
            />
          ) : (
            <PostButton
              showInputForm={showInputForm}
              setShowInputForm={setShowInputForm}
            />
          )}

          {postStatus === "loading" ? (
            <div className="d-flex justify-content-center g-2">
              <p className="text-white-50 fst-normal">Loading.</p>
            </div>
          ) : postStatus === "succeeded" ? (
            <PostItemList
              posts={posts.slice().sort((a, b) => b.date.localeCompare(a.date))}
            />
          ) : postStatus === "failed" ? (
            <div className="d-flex justify-content-center g-2">
              <p className="text-white-50 fst-normal">{error}</p>
            </div>
          ) : null}
        </Col>
      </Row>
    </>
  );
}
