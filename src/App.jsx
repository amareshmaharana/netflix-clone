import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import Login from "../src/pages/Login/Login";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
};

export default App;
