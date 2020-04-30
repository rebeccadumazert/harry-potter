const store = require('../stores/hpStore');
const { pagination } = require('./services.js');

const getCharacters = async (req, res) => {
  const page = Number(req.query.page);
  const characters = await store.getCharactersStore();
  res.json(pagination(characters, page));
};

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  const character = await store.getCharacterByIdStore(id);
  res.json(character);
};

module.exports = { getCharacters, getCharacterById };
