import React, { useState } from 'react';
import { getHat } from '../services/hat';
import { HatContent, HatContainer, HatSays, HatResponse } from './styles/hat';
import { ShakeLittle } from 'reshake';

const Hat = () => {
  const [hat, setHat] = useState('');

  const getRandomHat = async () => {
    const hat = await getHat();
    setHat(hat);
  };
  return (
    <HatContainer>
      <HatSays>El chapo te dira qui tu es...</HatSays>
      <HatContent onClick={getRandomHat}>
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
};

export default Hat;
