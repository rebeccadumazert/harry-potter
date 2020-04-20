const axios = require('axios');
const API_KEY = require('./auth');

const BASE_URL = 'https://www.potterapi.com/v1/';

const NB_CHARACTERS = 10;

const getCharactersStore = async () => {
  const { data } = await axios.get(`${BASE_URL}characters?key=${API_KEY}`);
  return data.slice(0, NB_CHARACTERS);
};

module.exports = { getCharactersStore };
