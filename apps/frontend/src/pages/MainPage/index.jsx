import React from "react";
import Navbar from "../../components/Navbar";
import {
  Circle,
  Container,
  ContainerDireita,
  ContainerDoisLados,
  ContainerEsquerda,
  SobreContainer,
} from "./styles";

function MainPage() {
  return (
    <Container>
      <Navbar />
      <ContainerDoisLados>
        <ContainerEsquerda>
          <Circle />
        </ContainerEsquerda>
        <ContainerDireita>FLKSDKFM</ContainerDireita>
      </ContainerDoisLados>
      <SobreContainer></SobreContainer>
    </Container>
  );
}

export default MainPage;
