import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getPost } from "../api/posts";
import { getUser } from "../api/users";
import Loader from "../components/Loader";

export function Post() {
  const { id } = useParams();
  const {
    status,
    error,
    data: post,
  } = useQuery({
    queryKey: ["posts", parseInt(id!)],
    queryFn: () => getPost(id!),
  });

  const { status: statusUser, data: user } = useQuery({
    enabled: post?.userId != null,
    queryKey: ["users", post?.userId],
    queryFn: () => getUser(post!.userId),
  });

  if (status === "loading") return <Loader />;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  let userName = user?.name;
  if (statusUser === "loading") userName = "Loading...";
  if (statusUser === "error") userName = "Error";

  return (
    <div>
      <Link to="/posts">All Posts</Link>
      <h1>
        {post.title}
        <br />
        <small>
          <Link to={`/users/${post.userId}`}>
            {statusUser === "success" && user.name}
          </Link>
        </small>
      </h1>
      <p>{post.body}</p>
    </div>
  );
}
