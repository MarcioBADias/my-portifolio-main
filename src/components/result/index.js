import React from "react";
import { Link } from "react-router-dom";

const Result = () => {
    return(
        <div>
            <h1>Sua menssagem foi enviada com sucesso!</h1>
            <p>Estarei retornando em breve, Obrigado.</p>
            <Link style={{textDecoration:'none'}} to={"/"}>Voltar ao início</Link>
        </div>
    )
}

export default Result;