import React from "react";
import { Nav, Footer } from "./components";
import { Home, Users, UserID, Albums, Photos, Comments, Todos } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users" element={<Users />} />
          <Route exact path="/user/:userId" element={<UserID />} />
          <Route exact path="/albums" element={<Albums />} />
          <Route exact path="/photos" element={<Photos />} />
          <Route exact path="/comments" element={<Comments />} />
          <Route exact path="/todos" element={<Todos />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
