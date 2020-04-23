import React, { Component } from 'react';
import { getHat } from '../services/hat';
import { HatContent, HatContainer } from './styles/hat';
import hat from './images/hat.png';

export default class Hat extends Component {
  state = {
    hat: '',
  };

  getRandomHat = async () => {
    const hat = await getHat();
    this.setState({ hat });
  };
  render() {
    return (
      <HatContainer>
        <h1>WHATS UR HOUSE?</h1>
        <HatContent onClick={this.getRandomHat}>
          <img src={hat} alt="" />
        </HatContent>
        <div>{this.state.hat}</div>
      </HatContainer>
    );
  }
}
