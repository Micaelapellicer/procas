const express = require('express');
const router = express.Router();
const maestroController = require('../controllers/maestroController');

router.get('/maestro', maestroController.showMaestro);

module.exports = router;
