import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function Photos() {
  const [Photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function FetchPhotos() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/photos?_limit=25`)
        .then((response) => response.json())
        .then((json) => {
          setPhotos(json);
          console.log(json);
        });
      setLoading(false);
    }
    FetchPhotos();
  }, []);

  return (
    <div className="dark:bg-slate-900 bg-zinc-200 h-screen">
      {Photos.map((Photos) => (
        <div key={Photos.id}>
          <img src={Photos.thumbnailUrl} />
        </div>
      ))}
    </div>
  );
}
