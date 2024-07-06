import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const ReactRouterDom = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<h1>Login</h1>}></Route>
        <Route path="*" element={<div>ERROR 404</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default ReactRouterDom;
