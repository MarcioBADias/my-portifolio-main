import React from 'react';
import Logo from '../../assets/img/logo.svg';
import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

import * as C from './style'

const Footer = () => {
    return(
        <C.Section>
            <C.Container>
                <C.Title>
                    Contatos
                </C.Title>
                <C.Adress>
                    Armação dos Buzios/RJ - Brasil
                </C.Adress>
                <C.Adress>
                (22) 99942-4224
                </C.Adress>
            </C.Container>
            <C.Container>
                <C.Logo src={Logo} alt='Logo Marcius Code' />
            </C.Container>
            <C.Container>
                <C.Title>
                    <C.SocialIcons>
                        <a style={{color:'inherit'}} href='https://github.com/MarcioBADias'>
                            <AiFillGithub/>
                        </a>
                    </C.SocialIcons>
                    <C.SocialIcons>
                        <a style={{color:'inherit'}} href='https://www.linkedin.com/in/marciobadias/'>
                            <AiFillLinkedin/>
                        </a>
                    </C.SocialIcons>
                    <C.SocialIcons>
                        <a style={{color:'inherit'}} href='https://web.whatsapp.com/send?phone=5522999424224'>
                            <RiWhatsappFill/>
                        </a>
                    </C.SocialIcons>
                </C.Title>
            </C.Container>
        </C.Section>
    )
}

export default Footer;