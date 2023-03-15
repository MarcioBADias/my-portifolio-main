import React from 'react';
import Logo from '../logo';
import SocialIcons from '../socialIcons';

import * as C from './style'

const Footer = () => {
    return(
        <C.Section>
            <SocialIcons size={50}/>
            <Logo size={200} />
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
        </C.Section>
    )
}

export default Footer;