const router = require('express').Router();
const charactersCtrl = require('../controllers/charactersCtrl');

router.get('/:id', charactersCtrl.getCharacterById);
router.get('/', charactersCtrl.getCharacters);

module.exports = router;
