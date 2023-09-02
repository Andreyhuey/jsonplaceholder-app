import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPost } from "../api/posts";

export function CreatePost() {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const { status, error, mutate } = useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      queryClient.setQueryData(["posts", newPost.id], newPost);
      navigate(`/posts/${newPost.id}`);
    },
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    mutate({
      title: titleRef.current!.value,
      body: bodyRef.current!.value,
    });
  }

  return (
    <>
      {status === "error" && JSON.stringify(error)}
      <Link to="/posts">All Posts</Link>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}></form>
    </>
  );
}
