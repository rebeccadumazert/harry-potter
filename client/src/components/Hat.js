import React, { Component } from 'react';
import { getHat } from '../services/hat';
import { HatContent, HatContainer, HatSays, HatResponse } from './styles/hat';
import { ShakeLittle } from 'reshake';

export default class Hat extends Component {
  state = {
    hat: '',
  };

  getRandomHat = async () => {
    const hat = await getHat();
    this.setState({ hat });
  };
  render() {
    const { hat } = this.state;
    return (
      <HatContainer>
        <HatSays>El chapo te dira qui tu es...</HatSays>

        <HatContent onClick={this.getRandomHat}>
          <ShakeLittle>
            <img
              src="https://i.skyrock.net/4209/59484209/pics/3217756773_1_6_0enNoVKG.gif"
              alt=""
            />
          </ShakeLittle>
        </HatContent>

        <HatResponse>{hat}</HatResponse>
      </HatContainer>
    );
  }
}
