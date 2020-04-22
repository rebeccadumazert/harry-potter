import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './index.css';

export const Head = styled.div`
  color: red;
  margin: 2% auto;
`;

export const StyledLink = styled(Link)`
  padding: 30px;
  color: black;
  text-decoration: none;
  font-family: 'HarryPotter';
  font-size: 40px;
`;
