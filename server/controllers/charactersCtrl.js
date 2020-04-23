const store = require('../stores/hpStore');

const RESULTS_BY_PAGES = 10;

const getCharacters = async (req, res) => {
  console.log('hey');
  const page = Number(req.query.page);
  const start = (page - 1) * RESULTS_BY_PAGES;
  const end = start + RESULTS_BY_PAGES;
  const characters = await store.getCharactersStore();
  res.json(characters.slice(start, end));
};

const getCharacterById = async (req, res) => {
  const { id } = req.params;
  const character = await store.getCharacterByIdStore(id);
  res.json(character);
};

module.exports = { getCharacters, getCharacterById };
