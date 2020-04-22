import axios from 'axios';

export const getCharacters = async (page) => {
  const { data } = await axios.get(`/api/v1/characters/`, {
    params: {
      page,
    },
  });
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
