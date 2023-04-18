import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";

export default function Comments() {
  const [Comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function FetchComments() {
      setLoading(true);
      fetch(`https://jsonplaceholder.typicode.com/Comments?`)
        .then((response) => response.json())
        .then((json) => {
          setComments(json);
          console.log(json);
        });
      setLoading(false);
    }
    FetchComments();
  }, []);

  return (
    <>
      <div className="h-screen bg-zinc-200 dark:bg-slate-900"></div>
    </>
  );
}
