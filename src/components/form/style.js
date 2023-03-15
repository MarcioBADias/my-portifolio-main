import { styled } from 'styled-components';

export const Section = styled.section`
  display: flex;   
`;

export const SocialArea = styled.div`
  width: 30vw;

  @media (max-width: 840px) {
    display: none;
  }
`;

export const SquareArea = styled.div`
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
`;

export const Square = styled.div`
  background-color: var(--cor-light);
  box-shadow: 0 10px 10px var(--cor-dark);
  color: var(--cor-dark);
  margin: 1rem;
  min-height: 120px;
  width: 60%;
  padding: 1rem;
  position: absolute;
  z-index: 1;
`;

export const FormArea = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70vw;
    position: relative;

    @media (max-width: 840px) {
    width: 100vw;
  }

`;

export const Form = styled.form`
    align-items: center;
    background-color: var(--cor-primary);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    height: 85%;
    justify-content: center;
    padding: 3rem 0;
    width: 60%;

    @media (max-width: 840px) {
    width: 80vw;
  }
`;

export const Title = styled.h1`
  margin-bottom: 1rem;
  margin-left: 8rem;
  text-transform: uppercase;

  @media (max-width: 840px) {
  margin-left:0;
  margin-top: 1rem;
}
`;

export const InputLarge = styled.input`
  background-color: var(--cor-primary);
  border: none;
  border-bottom: 1px var(--cor-dark) solid;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-left: 8rem;
  padding: .5rem;
  width: 60%;

  :focus{
    border: none;
    outline: none;
  }
  ::placeholder{
    background-color: none;
  }

  @media (max-width: 840px) {
  margin-left: 0;
  width: 80% ;
}
`;

export const InputTextBox = styled.textarea`
  background-color: var(--cor-primary);
  border: 1px var(--cor-dark) solid;
  font-size: 1rem;
  margin-left: 8rem;
  padding: .5rem;
  height: 200px;
  width: 60%;

  ::placeholder{
    background-color: red;
  }

  @media (max-width: 840px) {
  margin-left: 0;
  width: 80% ;
}
`;

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 700;
  padding: .5rem 2rem;
  margin-left: 8rem;
  margin-top: 1rem;
  text-transform: capitalize;
  box-shadow: 0 10px 10px var(--cor-dark);
  :hover{
    background-color: var(--cor-Myellow);
    color: var(light);
  }
  @media (max-width: 840px) {
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;