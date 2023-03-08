import React from "react";
import hardSkills from '../../assets/img/hard-skills-icons.svg';
import softSkills from '../../assets/img/soft-link.svg'

import * as C from './style';

const Skills = () =>{
    return (
        <C.Section id="skills">
            <C.Title>Habilidades</C.Title>
            <C.Container>
                <C.SubTitle>
                    Soft-skills
                </C.SubTitle>
                <C.SoftSkills src={softSkills} alt="Soft skills"/>
            </C.Container>
            <C.Container>
                <C.SubTitle>
                    Hard-skills
                </C.SubTitle>
                <C.Img src={hardSkills} alt="Hard skills"/>
            </C.Container>
        </C.Section>
    )
}

export default Skills;