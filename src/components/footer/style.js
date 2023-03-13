import { styled } from "styled-components";

export const Section = styled.section`
    background-color: #313131;
    display: flex;
    min-height: 40vh;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    @media (max-width: 840px){
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    margin-bottom: 2rem;

    @media (max-width: 840px){
        margin-top: 1rem;
    }
`;

export const Adress = styled.p`

`;

export const Logo = styled.img`
    width: 200px;
`;

export const SocialIcons = styled.i`
    svg {
    height: 50px;
    margin: 0 1rem;
    width: 50px;  
  }
  :hover{
      color: var(--cor-primary);
      cursor: pointer;
    }
`;