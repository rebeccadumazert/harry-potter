import React, { Component } from 'react';
import { getCharacters } from '../services/characters';
import {
  CharactersContent,
  StyledLink,
  StyledButton,
} from './styles/characters';
import next from './images/next.png';
import previous from './images/previous.png';

export default class Characters extends Component {
  state = {
    characters: [],
    page: 1,
  };
  componentDidMount() {
    this.getCharactersDatas();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getCharactersDatas();
    }
  }

  getCharactersDatas = async () => {
    const { page } = this.state;
    const characters = await getCharacters(page);
    this.setState({ characters });
  };

  changePage = (newPage) => {
    this.setState(({ page }) => ({
      page: page + newPage,
    }));
  };

  render() {
    const { characters } = this.state;
    return (
      <CharactersContent>
        {characters.map((character) => (
          <div key={character._id}>
            <StyledLink to={`/character/${character._id}`}>
              {character.name}
            </StyledLink>
          </div>
        ))}
        <StyledButton onClick={this.changePage.bind(null, -1)}>
          <img src={previous} alt="" />
        </StyledButton>
        <StyledButton onClick={this.changePage.bind(null, 1)}>
          <img src={next} alt="next" />
        </StyledButton>
      </CharactersContent>
    );
  }
}
