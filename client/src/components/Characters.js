import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCharacters } from '../services/characters';
import { CharactersContent } from './styles/characters';

export default class Characters extends Component {
  state = {
    characters: [],
  };
  componentDidMount() {
    this.getCharactersDatas();
  }

  getCharactersDatas = async () => {
    const characters = await getCharacters();
    this.setState({ characters });
  };

  render() {
    const { characters } = this.state;
    return (
      <CharactersContent>
        {characters.map((character) => (
          <div key={character._id}>
            <Link to={`/character/${character._id}`}>{character.name}</Link>
          </div>
        ))}
      </CharactersContent>
    );
  }
}
