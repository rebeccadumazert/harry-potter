import axios from 'axios';

export const getHat = async () => {
  const { data } = await axios.get(`/api/v1/hat`);
  return data;
};
