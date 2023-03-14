import styled from 'styled-components';

export const Nav = styled.nav`
  align-items: center;
  background-color: var(--cor-secondary);
  display: flex;
  height: 80px;
  justify-content: space-between;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 99;
`;

export const Container = styled.div``;

export const Img = styled.img`
  width: 80px;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  height: auto;

  @media (max-width: 840px) {
    background: var(--cor-secondary);
    backdrop-filter: blur(3px);
    display: ${({ showMenu }) => (showMenu ? 'flex' : 'none')};
    flex-direction: column;
    height: 100vh;
    justify-content:start;
    opacity: .95;
    padding: 10px 0;
    position: absolute;
    right: 0;
    top: 80px;
    width: 100%;
    z-index: 99;
  }
`;

export const MenuItem = styled.li`
  margin: 0 1rem;

  :hover {
    color: var(--cor-light);
    font-size: 1.2rem;
  }

  @media (max-width: 840px) {
    margin:1rem auto;
  }
`;

export const Link = styled.a`
  color: --cor-evidence;
  cursor: pointer;
  font-size: 1rem;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: capitalize;
`;

export const SVG = styled.i`
  svg {
    height: 30px;
    margin-left: .5rem;
    width: 30px;

    
  }
  :hover{
      color: var(--cor-primary);
      cursor: pointer;
    }
`;

export const MenuButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;

  @media (max-width: 840px) {
    display:flex;
  }
`;

export const MenuIcon = styled.i`
  svg {
    height: 35px;
    width: 35px;  
  }
  :hover{
      color: var(--cor-primary);
      cursor: pointer;
    }
`;