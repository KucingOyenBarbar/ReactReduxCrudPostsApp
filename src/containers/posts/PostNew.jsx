import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { addNewPosts } from "../../utils/lib/fetchPostData";
import PostHeadingTitle from "../../components/features/posts/PostHeadingTitle";
import PostInputForm from "../../components/features/posts/PostInput";
import ButtonBack from "../../components/ButtonBack";

export default function PostNew() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddPostsHandler = ({ title, content, userId }) => {
    dispatch(addNewPosts({ title, body: content, userId })).unwrap();
    navigate("/posts");
  };

  return (
    <Row className="justify-content-start align-content-start py-5">
      <Col>
        <ButtonBack title="Kembali" link="/posts" />

        <PostHeadingTitle title={`Buat postingan terbaru`} />
        <hr className="text-secondary" />

        <PostInputForm AddPosts={onAddPostsHandler} />
      </Col>
    </Row>
  );
}
