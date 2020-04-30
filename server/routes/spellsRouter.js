const router = require('express').Router();
const spellsCtrl = require('../controllers/spellsCtrl');

router.get('/', spellsCtrl.getSpells);

module.exports = router;
