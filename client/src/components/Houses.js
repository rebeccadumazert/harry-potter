import React, { Component } from 'react';
import { getHouses } from '../services/houses';
import { HouseContent, House } from './styles/houses';

export default class Houses extends Component {
  state = {
    houses: [],
  };
  componentDidMount() {
    this.getHousesDatas();
  }
  getHousesDatas = async () => {
    const houses = await getHouses();
    this.setState({ houses }, () => {
      console.log(this.state.houses);
    });
  };
  render() {
    const { houses } = this.state;
    return (
      <HouseContent>
        {houses.map((house) => (
          <House key={house._id} to={`/houses/${house._id}`}>
            {house.name}
          </House>
        ))}
      </HouseContent>
    );
  }
}
