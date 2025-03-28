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
  position: relative;
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
  position: relative;
  width: 70%;
  height: 70%;
  background-color: #E6992F;
  border-radius: 50%;
`;

export const EuImagem = styled.img`
  position: absolute;
  width: 25rem;
  height: 25rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const ContainerDireita = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
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