import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function Albums() {
  const [Albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function FetchAlbums() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/albums?`)
        .then((response) => response.json())
        .then((json) => {
          setAlbums(json);
          setLoading(false);
          console.log(json);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    FetchAlbums();
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
    <div className="bg-zinc-200 dark:bg-slate-900 dark:text-cyan-50 py-3">
      <h1 className="font-mono text-5xl text-center py-4 dark:text-zinc-400">
        Albums
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-col-5 2xl:grid-col-6 gap-5 dark:text-zinc-200 text-white">
        {Albums.map((al) => (
          <div
            key={al.id}
            className="py-2 border border-spacing-1 border-cyan-950"
          >
            <h1>{al.id}</h1>
            <p className="text-2xl">User ID: {al.userId}</p>
            <h5>Title : {al.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
