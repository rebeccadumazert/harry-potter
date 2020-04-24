import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharactersContent = styled.div`
  justify-content: start;
  text-align: center;
  padding: 3%;
  width: 30%;
  border-radius: 7px;
  background-color: rgb(255, 255, 255, 0.1);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1f0d88;
  font-size: 18px;
  line-height: 2;
`;

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  margin: 5px 20px 0 20px;
`;
