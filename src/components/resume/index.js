import React from "react";
import profile from "../../assets/img/profile-image.svg";
import profileToken from '../../assets/img/profile-token.svg';
import SelfWritten from "../self-written";

import * as C from './style';

const Resume = () => {
    const isScreenLessThan840px = () => {
    return window.innerWidth < 840;
    }

    return(
        <C.Wrapper>
            {!isScreenLessThan840px &&
            <C.Img src={profileToken} alt='Foto de perfil'/>}
            <C.Container>
                <C.TopLine>Marcio Dias</C.TopLine>
                <C.Title>
                    Desenvolvedor
                    <C.MultiText>
                        <SelfWritten/>
                    </C.MultiText>
                </C.Title>
                <C.Text>
                    Apaixonado por desafios e sempre em busca de novas oportunidades. Sou um profissional dinâmico e flexível, com facilidade para lidar com situações de mudança e pressão. Minha paciência e empatia facilitam meu trabalho em grupo, principalmente no trato com pessoas de  diferentes níveis de habilidade e backgrounds. Além disso, sou um indivíduo com facilidade de aprendizado; sempre disposto a adquirir novos conhecimentos e ampliar minhas habilidades.
                </C.Text>
                <C.Button><a style={{backgroundColor:'none', textDecoration:'none', color:'inherit'}} href="https://drive.google.com/file/d/18zax1YkLC8hTivX-TnZARoJWiAY5ugoX/view?usp=sharing">Curriculo Pdf</a></C.Button>
            </C.Container >
            {isScreenLessThan840px &&
            <C.ImageSpace>
                <C.Img src={profile} alt='Foto de perfil'/>
            </C.ImageSpace>}
        </C.Wrapper>
    )
}

export default Resume;