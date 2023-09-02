import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import Loader from "./Loader";

export function Posts() {
  const [items, setItems] = useState();

  const {
    status,
    error,
    data: posts,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (status === "loading") return <Loader />;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      <div></div>
    </>
  );
}
