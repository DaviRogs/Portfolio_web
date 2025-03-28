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
} from "./styles";
import Eu from "../../assets/images/euWeb.png";

function MainPage() {
  return (
    <Container>
      <Navbar />
      <ContainerDoisLados>
        <ContainerEsquerda>
          <Circle />
          <EuImagem src={Eu} />
        </ContainerEsquerda>
        <ContainerDireita>FLKSDKFM</ContainerDireita>
      </ContainerDoisLados>
      <SobreContainer></SobreContainer>
    </Container>
  );
}

export default MainPage;
