/* eslint-disable react/prop-types */
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import PostItemBody from "./PostItemBody";

export default function PostItem({ title, body, date, userId, id }) {
  const timestamp = new Date(date).toLocaleDateString("id-ID", {
    timeZone: "Asia/Jakarta",
    dateStyle: "full",
  });

  return (
    <Stack gap={2}>
      <Card body className="rounded mb-3">
        <PostItemBody
          title={title}
          content={body}
          timestamp={timestamp}
          userId={userId}
          postId={id}
        />
      </Card>
    </Stack>
  );
}
