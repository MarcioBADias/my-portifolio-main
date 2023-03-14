import React from 'react';

import * as C from './style';

const Form = () => {
    return(
        <C.Section>
        <C.SocialArea>
            <C.SquareArea>
            <C.Square style={{
                    top:90,
                    minWidth:380
                }}>Deixe sua menssagem e contato.  Será retornada o mais breve o possível.</C.Square>
                <C.Square style={{
                    top:90,
                    left:400
                }}>Telefone</C.Square>
                <C.Square style={{
                    top:230,
                    minWidth:380
                }}>Fique à vontade em me procurar em qualquer um dos canais ao lado.</C.Square>
                <C.Square style={{
                    top:230,
                    left:400
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
                <C.InputLarge name='email' type='email'  placeholder='E-mail de contato'/>
                <C.InputTextBox name='message' placeholder='Digite sua menssagem'/>
                <C.Button type='submit'>Enviar</C.Button>
            </C.Form>
        </C.FormArea>
        </C.Section>
    );
};

export default Form;