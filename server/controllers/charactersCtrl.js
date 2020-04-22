const store = require('../stores/hpStore');

const RESULTS_BY_PAGES = 10;

const getCharacters = async (req, res) => {
  const page = Number(req.query.page);
  const start = (page - 1) * RESULTS_BY_PAGES;
  const end = start + RESULTS_BY_PAGES;
  const characters = await store.getCharactersStore();
  res.json(characters.slice(start, end));
};

// const getCharacterById = async (req, res) => {
//   console.log(req.params.id);
//   const character = await store.getCharacterByIdStore();
//   res.json(character);
// };

module.exports = { getCharacters };
