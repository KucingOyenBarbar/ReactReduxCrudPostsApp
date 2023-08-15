import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import AuthorProfileItem from "../../components/features/authors/AuthorProfileItem";
import Commentitem from "../../components/features/comments/CommentItem";
import PostSingleItem from "../../components/features/posts/PostSingleItem";
import ButtonBack from "../../components/ButtonBack";

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
        <ButtonBack title="Kembali" link="/explore" />

        <Row className="justify-content-center align-content-center g-2 py-5">
          <Col lg={8}>{renderedContent}</Col>
        </Row>
      </Col>
    </Row>
  );
}
