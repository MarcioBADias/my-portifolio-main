import React from "react";
import Resume from '../../components/resume';
import Skills from '../../components/skills';
import Projects from '../../components/projects';

const Home = () => {
    return(
        <div>
            <Resume/>
            <Skills/>
            <Projects/>
        </div>
    )
}

export default Home;
