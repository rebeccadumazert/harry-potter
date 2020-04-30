import React from 'react';
import {
  StyledLink,
  ContainerHead,
  ContainerLogo,
  Logo,
} from './styles/header';
import logo from './images/harry-potter.png';

export const Header = () => {
  return (
    <ContainerHead>
      <ContainerLogo>
        <StyledLink to="/">
          <Logo src={logo} alt="" />
        </StyledLink>
      </ContainerLogo>
      <StyledLink to="/houses">Houses</StyledLink>
      <StyledLink to="/spells">Spells</StyledLink>
      <StyledLink to="/character">Characters</StyledLink>
    </ContainerHead>
  );
};
