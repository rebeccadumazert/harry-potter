import styled from 'styled-components';
import img from '../images/background.jpg';

export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${img});
  height: 100vh;
`;

export const CharactersCard = styled.div`
  display: flex;
  justify-content: space-around;
`;
