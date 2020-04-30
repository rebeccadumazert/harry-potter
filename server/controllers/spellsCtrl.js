const { getSpellsStore } = require('../stores/spells');
const { pagination } = require('./services');

const getSpells = async (req, res) => {
  const page = Number(req.query.page);
  const spells = await getSpellsStore();
  res.json(pagination(spells, page));
};

module.exports = { getSpells };
