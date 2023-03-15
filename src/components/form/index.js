import React, { useState } from 'react';

import * as C from './style';

const Form = () => {
    const [validDate, setValidDate] = useState(true);

    return(
        <C.Section id='contact'>
        <C.SocialArea>
            <C.SquareArea>
            <C.Square style={{
                    top:90,
                    left:110,
                    minWidth:380
                }}>Deixe sua menssagem e contato.  Será retornada o mais breve o possível.</C.Square>
                <C.Square style={{
                    top:90,
                    left:510,
                    maxWidth: 150
                }}>Telefone</C.Square>
                <C.Square style={{
                    top:230,
                    left:110,
                    minWidth:380
                }}>Fique à vontade em me procurar em qualquer um dos canais ao lado.</C.Square>
                <C.Square style={{
                    top:230,
                    left:510,
                    maxWidth: 150
                }}>email</C.Square>
            </C.SquareArea>
        </C.SocialArea>
        <C.FormArea>
            <C.Form action='https://formsubmit.co/marcius.dev.estudos@gmail.com' method='POST'>
                <C.Title>
                    Entre em contato:
                </C.Title>
                <input type='hidden' name='_next' value='https://marcio-portifolio.netlify.app/'/>
                <C.InputLarge name='name' type='text' placeholder='Nome Completo'/>
                {validDate && <span style={{color:'red',marginLeft:120, marginTop:-15, fontSize:12}}>
                        Insira um nome válido no campo acima.
                    </span>}
                <C.InputLarge name='email' type='email'  placeholder='E-mail de contato'/>
                {validDate && <span style={{color:'red',marginLeft:120, marginTop:-15, marginBottom:10, fontSize:12}}>
                        Insira um e-mail válido no campo acima.
                    </span>}
                <C.InputTextBox name='message' placeholder='Digite sua menssagem'/>
                {validDate && <span style={{color:'red',marginLeft:120, marginTop:5, fontSize:12}}>
                        Insira uma menssagem no campo acima.
                    </span>}
                <C.Button type='submit'>Enviar</C.Button>
            </C.Form>
        </C.FormArea>
        </C.Section>
    );
};

export default Form;