import axios from 'axios';

export const getSpells = async (page) => {
  const { data } = await axios.get('/api/v1/spells', {
    params: {
      page,
    },
  });
  console.log(data);
  return data;
};
