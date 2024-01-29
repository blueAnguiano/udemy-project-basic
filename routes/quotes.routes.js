const router = require('express').Router();
const {QuoteController} = require('../controllers');

router.get('/quote', QuoteController.index);

module.exports = router;