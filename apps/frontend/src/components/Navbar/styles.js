import styled from 'styled-components';

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(33, 33, 33, 0.99);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
`;

export const NavEsquerdaContainer = styled.header`
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
`;

export const Divider = styled.div`
    position: relative;
    display: flex;
    width: 2px;
    height: 2rem;
    background-color: white;
    margin: 0 2rem;
  
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Logo = styled.a`
  font-size: 1.0rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
  span {
    color: #E6992F;
    margin-left: 37px;
  }
`;


export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: 0.3s;
    font-family: "Righteous", sans-serif;
    font-weight: 400;
    font-style: normal;
    
    &:hover {
      color: #B2FF00;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    transition: 0.3s;
    
    &:hover {
      color: #E6992F;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  font-size: 1.8rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: black;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  a {
    color: white;
    text-decoration: none;
    
    &:hover {
      color: #B2FF00;
    }
  }
`;
