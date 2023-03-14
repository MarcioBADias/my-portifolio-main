import React from 'react';
import Logo from '../../assets/img/logo.svg';
import SocialIcons from '../socialIcons';

import * as C from './style'

const Footer = () => {
    return(
        <C.Section>
            <C.Container>
                <C.Title>
                    Endereço:
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
            <SocialIcons size={50}/>
        </C.Section>
    )
}

export default Footer;