import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

export default function Nav() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    localStorage.getItem("theme");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="py-3 bg-blue-700 text-white dark:bg-black dark:text-white">
      <nav className="flex  justify-between">
        <h1 className="ms-6">
          <Link to={`/`}>Home</Link>
        </h1>
        <ul className="flex justify-between gap-4 me-12 ">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/albums">Albums</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
          <button
            className="gap-4 mt-1 flex justify-between"
            onClick={handleThemeSwitch}
          >
            {theme === "light" ? <BsFillMoonFill /> : <BsFillSunFill />}
          </button>
        </ul>
      </nav>
    </div>
  );
}
