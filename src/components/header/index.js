import React, { useState } from "react";
import { Link } from "react-scroll";
import SocialIcons from "../socialIcons";

import Logo from '../../assets/img/logo.svg';

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
                <C.MenuItem>
                    <Link 
                    style={{textDecoration:'none'}} 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                        <C.Link>
                            Inicio
                        </C.Link>
                        </Link>
                </C.MenuItem>
                <C.MenuItem>
                <Link 
                    style={{textDecoration:'none'}} 
                    to='skills' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                        <C.Link>
                            Habilidades
                        </C.Link>
                    </Link>
                </C.MenuItem>
                <C.MenuItem>
                <Link 
                    style={{textDecoration:'none'}} 
                    to='projects' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                        <C.Link>
                            Projetos
                        </C.Link>
                    </Link>
                </C.MenuItem>
                <C.MenuItem>
                <Link 
                    style={{textDecoration:'none'}} 
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                        <C.Link>
                            Contatos
                        </C.Link>
                    </Link>
                </C.MenuItem>
            </C.Menu>

            <SocialIcons size={35}/>
            
            <C.MenuButton onClick={() => setShowMenu(!showMenu)}>
                <C.MenuIcon>
                    {showMenu? <CgCloseO/>:
                    <CgMenuRound>
                        <C.Menu showMenu={showMenu}>
                            <C.MenuItem>
                                <C.Link to="/">Inicio</C.Link>
                            </C.MenuItem>
                            <C.MenuItem>
                                <C.Link to="/skills">Habilidades</C.Link>
                            </C.MenuItem>
                            <C.MenuItem>
                                <C.Link to="/projects">Projetos</C.Link>
                            </C.MenuItem>
                            <C.MenuItem>
                                <C.Link to="/contacts">Contatos</C.Link>
                            </C.MenuItem>
                        </C.Menu>
                    </CgMenuRound>}
                </C.MenuIcon>
            </C.MenuButton>
        </C.Nav>
    );
};

export default Header;