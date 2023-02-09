import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// all imports
import Home from "./Pages/Home/Home";
import Register from "./Components/Login/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signup" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default App;
