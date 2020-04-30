import React, { useState, useEffect } from 'react';
import { getHouses } from '../services/houses';
import { HouseContent, House } from './styles/houses';

const Houses = () => {
  const [houses, setHouses] = useState([]);
  useEffect(() => {
    getHousesDatas();
  }, []);

  const getHousesDatas = async () => {
    const houses = await getHouses();
    setHouses(houses);
  };
  return (
    <HouseContent>
      {houses.map((house) => (
        <House key={house._id} to={`/houses/${house._id}`}>
          {house.name}
        </House>
      ))}
    </HouseContent>
  );
};

export default Houses;
