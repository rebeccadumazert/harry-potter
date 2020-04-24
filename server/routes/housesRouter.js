const router = require('express').Router();
const housesCtrl = require('../controllers/housesCtrl');

router.get('/:id', housesCtrl.getHousesById);
router.get('/', housesCtrl.getHouses);

module.exports = router;
