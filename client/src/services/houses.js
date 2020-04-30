import axios from 'axios';

export const getHouses = async () => {
  const { data } = await axios.get(`/api/v1/houses`);
  return data;
};

export const getHouseById = async (id) => {
  const { data } = await axios.get(`/api/v1/houses/${id}`);
  return data;
};
