const router = require('express').Router();
const hatCtrl = require('../controllers/hatCtrl');

router.get('/', hatCtrl.getHatCtrl);

module.exports = router;
