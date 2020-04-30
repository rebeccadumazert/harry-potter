import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacterById } from '../services/characters';
import { Character } from './styles/character';

const CharacterDetails = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getCharacter = async () => {
      const character = await getCharacterById(id);
      setCharacter(character);
    };
    getCharacter();
  }, [id]);

  const { name, role, species, bloodStatus } = character;
  return (
    <Character>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{species}</p>
      <p>{bloodStatus}</p>
    </Character>
  );
};

export default CharacterDetails;
