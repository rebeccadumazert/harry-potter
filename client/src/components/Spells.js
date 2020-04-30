import React, { useState, useEffect } from 'react';
import { getSpells } from '../services/spells';
import { StyledButton } from './styles/characters';
import { Spell, ContentSpells, SpellsComponent } from './styles/spells';
import next from './images/next.png';
import previous from './images/previous.png';

const Spells = () => {
  const [spells, setSpells] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getSpellsDatas = async () => {
      const spells = await getSpells(page);
      setSpells(spells);
    };
    getSpellsDatas();
  }, [page]);

  const changePage = (newPage) => {
    setPage(page + newPage);
  };
  return (
    <SpellsComponent>
      <ContentSpells>
        {spells.map(({ spell, _id, effect, type }) => (
          <Spell key={_id}>
            <h3>{spell}</h3>
            <p>Effect : {effect}</p>
            <p>Type : {type}</p>
          </Spell>
        ))}
      </ContentSpells>
      <StyledButton onClick={changePage.bind(null, -1)}>
        <img src={previous} alt="" />
      </StyledButton>
      <StyledButton onClick={changePage.bind(null, 1)}>
        <img src={next} alt="next" />
      </StyledButton>
    </SpellsComponent>
  );
};

export default Spells;
