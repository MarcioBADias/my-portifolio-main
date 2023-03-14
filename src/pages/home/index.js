import React from "react";
import Resume from '../../components/resume';
import Skills from '../../components/skills';
import Projects from '../../components/projects';
import Form from "../../components/form";

const Home = () => {
    return(
        <div>
            <Resume/>
            <Skills/>
            <Projects/>
            <Form/>
        </div>
    )
}

export default Home;
