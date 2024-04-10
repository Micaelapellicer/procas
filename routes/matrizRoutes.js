const express = require('express');
const router = express.Router();
const matrizController = require('../controllers/matrizController');

router.get('/matriz', matrizController.showMatriz);

module.exports = router;
