const store = require('../stores/hpStore');

const getCharacters = async (req, res) => {
  const characters = await store.getCharactersStore();
  res.json(characters);
};

module.exports = { getCharacters };
