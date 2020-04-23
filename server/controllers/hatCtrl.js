const store = require('../stores/hpStore');

const getHatCtrl = async (req, res) => {
  const hat = await store.getHat();
  res.json(hat);
};

module.exports = { getHatCtrl };
