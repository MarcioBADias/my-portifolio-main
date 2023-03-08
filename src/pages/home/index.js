import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Header from "../../components/header";
import Resume from '../../components/resume';
import Skills from '../../components/skills';
import Projects from '../../components/projects';

const Home = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Navigate to="/projects" />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/" element={<Navigate to="/skills" />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" exact element={<Resume />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Home;
