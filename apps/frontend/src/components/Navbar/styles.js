import styled from 'styled-components';

export const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(33, 33, 33, 0.99);
  color: white;
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
    width: 3px;
    border-radius: 30%;
    height: 2rem;
    background-color: var(--white-color);
    margin: 0 2rem;
  
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Logo = styled.a`
  font-size: 1.0rem;
  font-weight: 800;
  color: var(--white-color);
  text-decoration: none;
  span {
    color: var(--orangellow-color);
    margin-left: 37px;
  }
`;


export const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  a {
    color: var(--white-color);
    text-decoration: none;
    font-size: 1rem;
    transition: 0.3s;
    font-family: var(--title-font);
    font-weight: 500;
    font-style: normal;
    
    &:hover {
      color: var(--limon-color);
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
    color: var(--white-color);
    transition: 0.3s;
    
    &:hover {
      color: var(--orangellow-color);
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
  color: var(--white-color);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background: var(--black-color);
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);

  a {
    color: var(--white-color);
    text-decoration: none;
    
    &:hover {
      color: var(--limon-color);
    }
  }
`;
