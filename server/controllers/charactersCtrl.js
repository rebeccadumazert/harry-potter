const store = require('../stores/hpStore');

const getCharacters = async (req, res) => {
  console.log('jcable');
  const characters = await store.getCharactersStore();
  console.log(characters);
  res.json(characters);
};

module.exports = { getCharacters };
