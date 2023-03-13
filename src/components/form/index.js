import React from 'react';

import * as C from './style';

const Form = () => {
    return(
        <C.Section>
        <C.SocialArea>

        </C.SocialArea>
        <C.FormArea>
            <C.Container>
                <C.Title>
                    Entre em contato:
                </C.Title>
                <C.InputLarge placeholder='Nome Completo'/>
                <C.InputLarge placeholder='E-mail de contato'/>
                <C.InputTextBox placeholder='Digite sua menssagem'/>
                <C.Button>Enviar</C.Button>
            </C.Container>
        </C.FormArea>
        </C.Section>
    );
};

export default Form;