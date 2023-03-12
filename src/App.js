import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Home from "./pages/home";
import Global from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
      </Routes>
      <Global/>
    </BrowserRouter>
  );
}

export default App;
