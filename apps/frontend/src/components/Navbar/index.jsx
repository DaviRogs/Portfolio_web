import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import {
  NavbarContainer,
  Logo,
  SocialIcons,
  NavLinks,
  MobileMenuButton,
  MobileMenu,
  Divider,
  NavEsquerdaContainer,
} from "./styles";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavEsquerdaContainer>
        <Logo href="#">
          PORT
          <br />
          <span>FÓLIO</span>
        </Logo>

        <Divider />

        <SocialIcons>
          <a href="https://www.linkedin.com/in/davi-rogs1/">
            <FaLinkedin size={20} />
          </a>
          <a href="https://github.com/DaviRogs">
            <FaGithub size={20} />
          </a>
          <a href="mailto:davirocha12.80@gmail.com">
            <FaEnvelope size={20} />
          </a>
        </SocialIcons>
      </NavEsquerdaContainer>

      <NavLinks>
        <a href="#">INÍCIO</a>
        <a href="#">SOBRE MIM</a>
        <a href="#">PROJETOS</a>
        <a href="#">FERRAMENTAS</a>
      </NavLinks>

      <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </MobileMenuButton>

      {isOpen && (
        <MobileMenu>
          <a href="#">INÍCIO</a>
          <a href="#">SOBRE MIM</a>
          <a href="#">PROJETOS</a>
          <a href="#">FERRAMENTAS</a>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
}
