import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getHouseById } from '../services/houses';
import { Link } from 'react-router-dom';

const HouseDetail = () => {
  const [house, setHouse] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const getHouseDetails = async () => {
      const house = await getHouseById(id);
      setHouse(house);
    };
    getHouseDetails();
  }, [id]);

  const { name, mascot, members = [] } = house;
  return (
    <div>
      <h1>{name}</h1>
      <p>Mascot : {mascot}</p>
      {members.map(({ _id: id, name }) => (
        <Link key={id} to={`/character/${id}`}>
          {name}
        </Link>
      ))}
    </div>
  );
};

export default HouseDetail;
