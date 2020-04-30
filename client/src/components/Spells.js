import React, { Component } from 'react';
import { getSpells } from '../services/spells';
import { StyledButton } from './styles/characters';
import { Spell, ContentSpells, SpellsComponent } from './styles/spells';
import next from './images/next.png';
import previous from './images/previous.png';

export default class Spells extends Component {
  state = {
    spells: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getSpellsDatas();
    }
  }
  componentDidMount() {
    this.getSpellsDatas();
  }
  getSpellsDatas = async () => {
    const { page } = this.state;
    const spells = await getSpells(page);
    this.setState({ spells });
  };
  changePage = (newPage) => {
    this.setState(({ page }) => ({
      page: page + newPage,
    }));
  };
  render() {
    const { spells } = this.state;
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
        <StyledButton onClick={this.changePage.bind(null, -1)}>
          <img src={previous} alt="" />
        </StyledButton>
        <StyledButton onClick={this.changePage.bind(null, 1)}>
          <img src={next} alt="next" />
        </StyledButton>
      </SpellsComponent>
    );
  }
}
