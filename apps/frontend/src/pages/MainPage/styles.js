import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

export const ContainerDoisLados = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

export const ContainerEsquerda = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  background-color: #0F0E17;
  color: white;
`;

export const Circle = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: #E6992F;
  border-radius: 50%;
`;

export const ContainerDireita = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  background-color: #1F1A24;
  color: white;
`;

export const SobreContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0F0E17;
  color: white; */
`;