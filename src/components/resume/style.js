import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  position: relative;
  overflow: hidden;

  ::before{
    position: absolute;
    content: '';
    height: 400px;
    width: 400px;
    border-radius: 50%;
    left: -15%;
    top: 30%;
    background: linear-gradient(45deg, var(--cor-dark),var(--cor-primary));
    z-index: -2;

    animation: object1 20s linear infinite;

    @keyframes object1{
      50%{
        left:-5%;
        top: 25%;
      }
    }

    @media (max-width: 840px) {
      left: -15%;
      top: 60%;
  }
  }

  ::after{
    position: absolute;
    content: '';
    height: 150px;
    width: 150px;
    border-radius: 50%;
    left: 40%;
    top: 15%;
    background: linear-gradient(45deg, var(--cor-dark),var(--cor-primary));
    animation: object2 10s linear infinite;
    z-index: -2;

    @keyframes object2{
      50%{
        top: 20%;
      }
    }

    @media (max-width: 840px) {
      left: 65%;
      top: 15%;
  }

  }
`;

export const Container = styled.div`
  margin-top: 100px;
  width: 60vw;
  z-index: 5;

  @media (max-width: 840px) {
    width: 90vw;
  }
`;

export const TopLine = styled.span`
  color: var(--cor-Myellow);
  display: block;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;

  @media (max-width: 840px) {
    font-size: 1.8rem;
  }
`;

export const Title = styled.h1`
  display: block;
  font-size: 1.6rem;

  @media (max-width: 840px) {
    font-size: 1.6rem;
  }
`;

export const MultiText = styled.span`
  color: var(--cor-Myellow);
  font-size: 1.6rem;
  margin-left: 0.5rem;
  text-transform: capitalize;

  @media (max-width: 840px) {
    font-size: 1.6rem;
  }
`;

export const Text = styled.p`
  display: block;
  margin-top: 0.5rem;
  width: 80%;
  font-size: 1rem;
`;

export const Button = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 1rem 2rem;
    margin: 2rem .5rem;
    text-transform: capitalize;
    box-shadow: 0 10px 10px var(--cor-Myellow);
    :hover{
        background-color: var(--cor-Myellow);
        color: var(light);
    }

    @media (max-width: 840px){
        margin: 2rem auto;
    }
`;

export const ImageSpace = styled.div`
  width: 50vw;
  
  @media (max-width: 840px){
      display:none;
  }
`;

export const Img = styled.img`
  margin-top: 100px;
  position:relative;
  width: 60vw;
  top: 70px;
  left: 50px;
    
   @media (max-width: 840px){
      display:none;
  }
`;