import axios from "axios";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export function getPosts() {
  return axios
    .get<Post[]>("https//localhost:5174/posts,", { params: { _sort: "title" } })
    .then((res) => res.data);
}
