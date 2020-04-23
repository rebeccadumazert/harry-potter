import React, { Component } from 'react';
import { getCharacterById } from '../services/characters';
import { Character } from './styles/character';

export default class CharacterDetails extends Component {
  state = {
    character: [],
  };
  componentDidMount() {
    this.getCharacter();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getCharacter();
    }
  }
  getCharacter = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const character = await getCharacterById(id);
    this.setState({ character });
  };
  render() {
    const {
      character: { name, role, species, bloodStatus },
    } = this.state;
    return (
      <Character>
        <p>{name}</p>
        <p>{role}</p>
        <p>{species}</p>
        <p>{bloodStatus}</p>
      </Character>
    );
  }
}
