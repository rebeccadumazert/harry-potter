const axios = require('axios');
const API_KEY = require('./auth');

const BASE_URL = 'https://www.potterapi.com/v1/';

const getCharactersStore = async () => {
  const { data } = await axios.get(`${BASE_URL}characters?key=${API_KEY}`);
  return data;
};

const getCharacterByIdStore = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}characters/${id}?key=${API_KEY}`
  );
  return data;
};

const getHat = async () => {
  const { data } = await axios.get(`${BASE_URL}sortingHat`);
  return data;
};

module.exports = { getCharactersStore, getCharacterByIdStore, getHat };
