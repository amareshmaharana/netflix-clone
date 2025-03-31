import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

import Home from "../src/pages/Home/Home";
import Login from "../src/pages/Login/Login";
import Player from "./pages/Player/Player";
import { auth } from "./firebase";

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("Logged In")
        navigate("/");
      } else {
        console.log("Logged Out")
        navigate("/login");
      }
    });
  }, [])

  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
};

export default App;
