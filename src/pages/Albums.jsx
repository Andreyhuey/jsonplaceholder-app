import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function Albums() {
  const [Albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function FetchAlbums() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/albums?_limit=25`)
        .then((response) => response.json())
        .then((json) => {
          setAlbums(json);
          console.log(json);
        });
      setLoading(false);
    }
    FetchAlbums();
  }, []);

  return <div className="h-screen dark:bg-slate-900"></div>;
}
