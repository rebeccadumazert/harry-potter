const axios = require('axios');

const API_KEY = require('./auth');

const BASE_URL = 'https://www.potterapi.com/v1/';

const getHouses = async () => {
  const { data } = await axios.get(`${BASE_URL}houses?key=${API_KEY}`);
  return data;
};

const getHousesById = async () => {
  const { data } = await axios.get(`${BASE_URL}houses/${id}?key=${API_KEY}`);
  console.log(data[0]);
  return data[0];
};

module.exports = { getHouses, getHousesById };
