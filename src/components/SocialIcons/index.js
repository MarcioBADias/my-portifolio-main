import React from 'react';

import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";

import { RiWhatsappFill } from "react-icons/ri";

import * as C from './style';

const SocialIcons = ({ size }) => {
    return(
    <C.Container>
        <C.Title>
            <C.SocialIcons size={size}>
                <a style={{color:'inherit'}} href='https://github.com/MarcioBADias'>
                    <AiFillGithub/>
                </a>
            </C.SocialIcons>
            <C.SocialIcons size={size}>
                <a style={{color:'inherit'}} href='https://www.linkedin.com/in/marciobadias/'>
                    <AiFillLinkedin/>
                </a>
            </C.SocialIcons>
            <C.SocialIcons size={size}>
                <a style={{color:'inherit'}} href='https://web.whatsapp.com/send?phone=5522999424224'>
                    <RiWhatsappFill/>
                </a>
            </C.SocialIcons>
        </C.Title>
    </C.Container>
    )
}

export default SocialIcons;