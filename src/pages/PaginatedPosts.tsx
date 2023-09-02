import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import { getPostsPaginated } from "../api/posts";
import { PostList } from "../components";
import Loader from "../components/Loader";

export function PaginatedPosts() {
  const [params] = useSearchParams();
  const page = parseInt(params.get("page")!) || 1;

  const { status, error, data, fetchStatus } = useQuery({
    queryKey: ["posts", { page }],
    keepPreviousData: true,
    queryFn: () => getPostsPaginated(page),
  });

  if (status === "loading") return <Loader />;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      <h1>Posts{fetchStatus === "fetching" && "Loading..."}</h1>
      <PostList posts={data.posts} />
      {data.previousPage && (
        <Link to={`/paginated?page=${data.previousPage}`}>Previous</Link>
      )}
      {data.nextPage && (
        <Link to={`/paginated?page=${data.nextPage}`}>Next</Link>
      )}
    </>
  );
}
