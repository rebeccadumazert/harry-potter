import axios from 'axios';

export const getCharacters = async (page) => {
  const { data } = await axios.get(`/api/v1/characters/`, {
    params: {
      page,
    },
  });
  return data;
};

export const getCharacterById = async (id) => {
  const { data } = await axios.get(`/api/v1/characters/${id}`);
  return data;
};
