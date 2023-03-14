import { styled } from "styled-components";

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 2rem;

    @media (max-width: 840px) {
    padding-top: 1rem;
  }
`;

export const Title = styled.h1`
    margin-bottom: 2rem;

    @media (max-width: 840px){
        margin-top: 1rem;
    }
`;

export const SocialIcons = styled.i(({ size }) => `
    svg {
    height: ${size}px;
    margin: 0 1rem;
    width: ${size}px;  
  }
  :hover{
      color: var(--cor-primary);
      cursor: pointer;
    }
`);