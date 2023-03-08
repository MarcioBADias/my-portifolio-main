import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
  padding: 0 10%;
  overflow: hidden;

  /* ::before {
    position: absolute;
    content: '';
    height: 600px;
    width: 600px;
    border-radius: 50%;
    left: -12%;
    top: 40%;
    background: linear-gradient(45deg, #000, #efc94c);
    animation: object1 6s linear infinite;
    z-index: 0;

    @keyframes object1 {
      50% {
        left: -13%;
        top: 41%;
      }
    }

    @media (max-width: 840px) {
      height: 400px;
      width: 400px;
      left: -30%;
      top: 55%;

      @keyframes object1 {
        50% {
          left: -28%;
          top: 50%;
        }
      }
    }
  }

  ::after {
    position: absolute;
    content: '';
    height: 100px;
    width: 100px;
    border-radius: 50%;
    left: 45%;
    top: 20%;
    background: linear-gradient(45deg, #000, #efc94c);
    animation: object2 6s linear infinite;

    @keyframes object2 {
      50% {
        left: 43%;
        top: 18%;
      }
    }
  } */
`;

export const Container = styled.div`
  width: 60vw;
  z-index: 5;

  @media (max-width: 840px) {
    width: 90vw;
  }
`;

export const TopLine = styled.span`
  color: #efc94c;
  display: block;
  position: relative;
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
  color: #efc94c;
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
    box-shadow: 0 10px 10px #efc94c;
    :hover{
        background-color: #efc94c;
        color: #fff;
    }

    @media (max-width: 840px){
        margin: 2rem auto;
    }
`;

export const Img = styled.img`
    position:relative;
    height: 100vh;
    width: 45vw;
    top: 0px;
    left: 100px;
    
    @media (max-width: 840px){
        display:none;
    }
`;