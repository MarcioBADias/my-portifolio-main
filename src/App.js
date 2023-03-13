import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Footer from "./components/footer";

import Global from "./styles/global";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/home" exact element={<Home />} />
      </Routes>
      <Footer/>
      <Global/>
    </BrowserRouter>
  );
}

export default App;
