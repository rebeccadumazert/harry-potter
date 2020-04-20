import React, { Component } from 'react';
import { getHouseById } from '../services/houses';
import { Link } from 'react-router-dom';

export default class HouseDetail extends Component {
  state = {
    house: {},
  };
  componentDidMount() {
    this.getHouseDetails();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getHouseDetails();
    }
  }
  getHouseDetails = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const house = await getHouseById(id);
    this.setState({ house });
  };
  render() {
    const {
      house: { name, mascot, members = [] },
    } = this.state;
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
  }
}
