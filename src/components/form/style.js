import { styled } from "styled-components";

export const Section = styled.section`
    display: flex;
    height: calc(100vh - 50px);
    
`;

export const SocialArea = styled.div`
    width: 20vw;

    @media (max-width: 840px) {
    display: none;
  }
`;

export const FormArea = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80vw;

    @media (max-width: 840px) {
    width: 100vw;
  }

`;

export const Container = styled.div`
    align-items: center;
    background-color: var(--cor-primary);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 85%;
    justify-content: center;
    width: 60%;

    @media (max-width: 840px) {
    width: 80vw;
  }
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
    margin-left: 8rem;

    @media (max-width: 840px) {
    margin-left:0;
    margin-top: 1rem;
  }
`;

export const InputLarge = styled.input`
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-left: 8rem;
    padding: .5rem;
    width: 60%;

    @media (max-width: 840px) {
    margin-left: 0;
    width: 80% ;
  }
`;

export const InputTextBox = styled.input`
    font-size: 1rem;
    margin-left: 8rem;
    padding: .5rem;
    height: 200px;
    width: 60%;

    @media (max-width: 840px) {
    margin-left: 0;
    width: 80% ;
  }
`;

export const Button = styled.button`
    margin-left: 8rem;
    margin-top: 1rem;

    @media (max-width: 840px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;