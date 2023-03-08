import React, { useState } from "react";
import Logo from '../../assets/img/logo.svg';
import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { CgMenuRound, CgCloseO } from "react-icons/cg";
import * as C from './style'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <C.Nav>
            <C.Container>
                <C.Img src={Logo} alt='Logo Marcius Code' />
            </C.Container>

            <C.Menu showMenu={showMenu}>
                <C.MenuItem><C.Link>Inicio</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Sobre</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Habilidades</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Projetos</C.Link></C.MenuItem>
                <C.MenuItem><C.Link>Contatos</C.Link></C.MenuItem>
            </C.Menu>

            <C.Container>
                <C.SVG>
                    <AiFillGithub/>
                </C.SVG>
                <C.SVG>
                    <AiFillLinkedin/>
                </C.SVG>
                <C.SVG>
                    <RiWhatsappFill/>
                </C.SVG>
            </C.Container>
            
            <C.MenuButton onClick={() => setShowMenu(!showMenu)}>
                <C.MenuIcon>
                    {showMenu? <CgCloseO/>:
                        <CgMenuRound>
                        <C.Menu showMenu={showMenu}>
                            <C.MenuItem><C.Link>Inicio</C.Link></C.MenuItem>
                            <C.MenuItem><C.Link>Sobre</C.Link></C.MenuItem>
                            <C.MenuItem><C.Link>Habilidades</C.Link></C.MenuItem>
                            <C.MenuItem><C.Link>Projetos</C.Link></C.MenuItem>
                            <C.MenuItem><C.Link>Contatos</C.Link></C.MenuItem>
                        </C.Menu>
                    </CgMenuRound>}
                </C.MenuIcon>
            </C.MenuButton>
        </C.Nav>
    );
};

export default Header;