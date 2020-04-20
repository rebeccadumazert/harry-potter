import axios from 'axios';

export const getCharacters = async () => {
  console.log('wsh');
  const { data } = await axios.get(`/api/v1/characters/`);
  console.log(data);
  return data;
};

export const getCharacterById = async (id) => {
  console.log('hey');
  // const { data } = await axios.get(
  //   `${BASE_URL}characters/${id}?key=${API_KEY}`
  // );
  // console.log(data);
  // return data;
};
