import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function Users() {
  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function FetchUsers() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((json) => {
          setUsers(json);
          console.log(json);
        });
      setLoading(false);
    }
    FetchUsers();
  }, []);

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
    <div className="h-auto  dark:text-grey-100 bg-white dark:bg-slate-900 px-4 md:px-8 lg:px-12">
      <h1 className="font-mono text-5xl text-center py-4 dark:text-zinc-400">
        Users
      </h1>
      <div className=" py-6 grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6 gap-5 dark:text-zinc-200 text-white">
        {Users.map((u) => (
          <div
            key={u.id}
            className="rounded-lg border-2 border-sky-600 p-2 bg-violet-900"
          >
            <p className="text-center text-xl text-purple-600">{u.name}</p>
            <h3>ID: {u.id}</h3>
            <p className=" text-rose-300 ">Username: {u.username}</p>
            <p>Email: {u.email}</p>
            <p>Phone: {u.phone}</p>
            <Link to={`/user/${u.id}`} className="place-items-end">
              <button className="bg-blue-500 rounded border-spacing-4 p-1">
                Learn More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
