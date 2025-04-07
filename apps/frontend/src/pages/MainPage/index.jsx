import React from "react";
import Navbar from "../../components/Navbar";
import {
  Circle,
  Container,
  ContainerDireita,
  ContainerDoisLados,
  ContainerEsquerda,
  SobreContainer,
  EuImagem,
  Title,
  TitleTwo,
  ContainerAjuste,
} from "./styles";
import Eu from "../../assets/images/euWeb.png";
import Icon1 from "../../assets/svgs/icon1.svg";
import Icon2 from "../../assets/svgs/icon2.svg";
import MyName from "../../assets/svgs/myName.svg";

function MainPage() {
  return (
    <Container>
      <Navbar />
      <ContainerDoisLados>
        <ContainerEsquerda>
          <img
            src={Icon1}
            style={{
              position: "relative",
              right: "20vw",
              top: "20vh",
              width: "7em",
              height: "auto",
              zIndex: 2,
            }}
          />
          <img
            src={Icon2}
            style={{
              position: "relative",
              left: "20vw",
              top: "5vh",
              width: "10em",
              height: "auto",
              zIndex: 2,
            }}
          />
          <Circle />
          <EuImagem src={Eu} />
        </ContainerEsquerda>
        <ContainerDireita>
          <img
            src={MyName}
            style={{
              position: "relative",
              bottom: "10vh",
              right: "5%",
              width: "25em",
              height: "auto",
              zIndex: 2,
            }}
          />
          <ContainerAjuste>
            <Title>Olá,&nbsp;</Title>
            <TitleTwo> bem vindo</TitleTwo>
            <Title>!</Title>
          </ContainerAjuste>
          <Title>Engeheiro de Software na</Title>
          <TitleTwo>UnB</TitleTwo>
        </ContainerDireita>
      </ContainerDoisLados>
      <SobreContainer></SobreContainer>
    </Container>
  );
}

export default MainPage;
