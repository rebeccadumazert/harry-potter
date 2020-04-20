import React from 'react';
import { StyledLink, Head } from './styles/header';

export const Header = () => {
  return (
    <Head>
      <StyledLink to="/houses">Houses</StyledLink>
      <StyledLink to="/spells">Spells</StyledLink>
      <StyledLink to="/character">Characters</StyledLink>
    </Head>
  );
};
