import styled from 'styled-components';

export const Section = styled.div`
    align-items: center;
    background-color: var(--cor-primary);
    color: #000;
    display: flex;
    flex-wrap: wrap;
    /* height: 110vh; */
    justify-content: space-around;

    @media (max-width: 840px){
        flex-direction: column;
    }
`;

export const Title = styled.h1`
    font-weight: bold;
    margin: 1rem 0;
    text-align: center;
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 40vw;

    @media (max-width: 840px){
        flex-direction: column;
        width: 100%;
    }
`;

export const SubTitle = styled.h2`
    font-weight: bold;
    text-align: center;
    width: 100%;
`;

export const SoftSkills = styled.img`
    margin-left: -3rem;
    width: 100%;

    @media (max-width: 840px){
        margin:-1rem;
    }
`;

export const Img = styled.img`
    width: 100%;
`;