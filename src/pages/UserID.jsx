import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { IoMdDoneAll } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function UserID() {
  const { userId } = useParams();
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function FetchUser() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((json) => {
          setUser(json);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    async function FetchPosts() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then((response) => response.json())
        .then((json) => {
          setPosts(json);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    async function FetchTodos() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then((response) => response.json())
        .then((json) => {
          setTodos(json);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    FetchUser();
    FetchPosts();
    FetchTodos();
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
    <div className="dark:bg-slate-900 dark:text-white px-6 py-10">
      {loading}
      <h3 className="my-9 text-center font-extrabold text-4xl">Details</h3>
      <div className="border rounded p-3 w-auto">
        <div key={user.id} className="grid sm:grid-cols-2  gap-5">
          <div>
            <div className="flex justify-start gap-4">
              <b>Name</b>
              <p>{user.name}</p>
            </div>
            <div className="flex justify-start gap-4">
              <b>Email Address</b>
              <p>{user.email}</p>
            </div>
            <div className="flex justify-start gap-4">
              <b>Phone Number</b>
              <p>{user.phone}</p>
            </div>
            <div className="flex justify-start gap-4">
              <b>Username</b>
              <p>{user.username}</p>
            </div>
            <div className="flex justify-start gap-4">
              <b>Website</b>
              <p>{user.website}</p>
            </div>
          </div>
          <div>
            <div className="flex justify-start gap-4">
              <b>City</b>
              <p>{user.address.city}</p>
            </div>
            <div className="flex justify-start gap-4">
              <b>Street</b>
              <p>{user.address.street}</p>
            </div>
            <div className="flex justify-start gap-4">
              <b>Suite</b>
              <p>{user.address.suite}</p>
            </div>
            <div className="flex justify-start gap-4">
              <b>Zipcode</b>
              <p>{user.address.zipcode}</p>
            </div>
            <div className="flex justify-start gap-4">
              <b>Geo</b>
              <p>Lat: {user.address.geo.lat}</p>
              <p>Lng: {user.address.geo.lng}</p>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" my-9 text-center font-extrabold text-4xl">Todos</h1>
      <div className="my-3 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6 gap-5">
        {todos.map((todos) => (
          <>
            <div key={todos.id} className="">
              <div className="border rounded p-3 w-auto my-2">
                <div className="flex justify-start gap-4">
                  <b>ID</b>
                  <p>{todos.id}</p>
                </div>
                <div className="flex justify-start gap-4">
                  <b>Title</b>
                  <p>{todos.title}</p>
                </div>
                <div className="flex justify-start gap-4">
                  <b>Todo Status</b>
                  <p>
                    {todos.completed === false ? (
                      <RxCross2 className="mt-1" size={20} color="red" />
                    ) : (
                      <IoMdDoneAll className="" size={20} color="green" />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 className="my-9 text-center font-extrabold text-4xl">Posts</h1>
      <div className="my-3 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6 gap-5">
        {posts.map((posts) => (
          <>
            <div key={posts.id} className="">
              <div className="border rounded p-3 w-auto my-2">
                <div className="flex justify-start gap-4">
                  <b>ID</b>
                  <p>{posts.id}</p>
                </div>
                <div className="flex justify-start gap-4">
                  <b>Title</b>
                  <p>{posts.title}</p>
                </div>
                <div className="flex justify-start gap-4">
                  <b>Body</b>
                  <p>{posts.body}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
