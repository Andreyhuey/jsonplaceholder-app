import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { BsFillPersonFill, BsMailbox } from "react-icons/bs";

export default function UserID() {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [userPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function FetchUser() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((json) => {
          setUser(json);
          console.log(json);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    async function FetchPosts() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((json) => {
          setPosts(json);
          console.log(json);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    FetchUser();
    FetchPosts();
  }, [userId]);

  if (loading)
    return (
      <div className=" text-5xl flex items-center justify-center h-screen dark:bg-black dark:text-white">
        <BeatLoader
          color="blue"
          size={13}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  return (
    <div className="h-screen dark:bg-slate-900 dark:text-white px-6 py-10">
      {loading}
      <div className="border bg-indigo-700 rounded p-3 w-auto">
        <div key={user.id}>
          <div className="flex justify-start gap-4">
            <BsFillPersonFill size={26} />
            <p>{user.name}</p>
          </div>
          <div className="flex justify-start gap-4">
            <BsMailbox size={26} />
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
