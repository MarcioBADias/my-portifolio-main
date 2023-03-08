import React from "react";
import Header from "../../components/header";
import Projects from "../../components/projects";
import Resume from "../../components/resume";
import Skills from "../../components/skills";

const Home = () => {
    return(
        <div>
            <Header/>
            <Resume/>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default Home;