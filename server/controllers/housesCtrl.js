const store = require('../stores/houses');

const getHouses = async (req, res) => {
  const houses = await store.getHouses();
  res.json(houses);
};
const getHousesById = async (req, res) => {
  const { id } = req.params;
  const house = await store.getHouseById();
  res.json(house);
};

module.exports = { getHouses, getHousesById };
