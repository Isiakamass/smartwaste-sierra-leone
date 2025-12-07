const express = require('express');
const router = express.Router();
const controller = require('../controllers/binController');

router.get('/bins', controller.getAllBins);

module.exports = router;
