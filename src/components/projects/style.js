import styled from 'styled-components';

export const Section = styled.div`
    align-items: center;
    color: #000;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: space-around;

    @media (max-width: 840px){
        flex-direction: column;
        height: auto;
    }
`;

export const TextArea = styled.div`
    display: block;
    margin: 0 3rem;
    margin-top: -9rem;
    width: 30vw;

    @media (max-width: 840px){
        flex-direction: column;
        margin-left: 3rem;
        margin-top: 1rem;
        width: 80%;
    }
`;

export const Title = styled.h1`
    color: var(--cor-primary);
    font-size:2rem;
    font-weight: bold;
    margin: 1rem 0;
    text-transform: uppercase;
    width: 100%;

    @media (max-width: 840px){
        margin-top: 1.6rem;
        width: 100%;
    }
`;

export const Text = styled.p`
    color: #efefef;
    display: block;
    font-weight: bold;
    width: 90%;

    @media (max-width: 840px){
        width: 100%;
    }
`;

export const ProjectArea = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60vw;

    @media (max-width: 840px){
        align-items: center;
        flex-direction: column;
        margin-top: 1rem;
        width: 100%;
    }
`;

export const Link = styled.a`
    margin: 1rem;
    width: 40%;

    @media (max-width: 840px){
        width: 80%;
    }
`;

export const Img = styled.img`
    width: 100%;

    @media (max-width: 840px){
        width: 100%;
    }
`;