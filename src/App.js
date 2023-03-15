import React from "react";
import Header from "./components/header";
import Home from "./pages/home";
import Footer from "./components/footer";
import Success from "./pages/Success";

import Global from "./styles/global";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/result" element={<Success />} />
      </Routes>
      <Footer/>
      <Global/>
    </BrowserRouter>
  );
}

export default App;
