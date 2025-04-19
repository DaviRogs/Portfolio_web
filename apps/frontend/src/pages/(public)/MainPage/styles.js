import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
`;

export const ContainerDoisLados = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: #212121;
`;

export const ContainerEsquerda = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 65em;
  color: white;
`;

export const Circle = styled.div`
  position: relative;
  width: 50em;
  aspect-ratio: 1 / 1;
  background-color: #E6992F;
  border-radius: 50%;
  top: 4em;
`;

export const EuImagem = styled.img`
  position: absolute;
  width: 47em;
  height: auto;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const ListrasSVG = styled.img`
 width: 10%;
  height: auto;
`;

export const ContainerDireita = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 45%;
  height: 65em;
`;

export const ContainerAjuste = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`

export const Title = styled.h1`
  font-size: 3em;
  color: #FFFFFF;
  text-align: center;
  margin-top: 0;
`;

export const TitleTwo = styled.h1`
  font-size: 3em;
  color: #B2FF00;
  text-align: center;
  margin-top: 0;
`;

export const SobreContainer = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0F0E17;
  color: white; */
`;