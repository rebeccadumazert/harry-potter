const router = require('express').Router();
const charactersCtrl = require('../controllers/charactersCtrl');

router.get('/', charactersCtrl.getCharacters);

// router.get('/:id', charactersCtrl.getCharacterById);

module.exports = router;
