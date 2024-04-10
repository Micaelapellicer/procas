const express = require('express');
const router = express.Router();
const matrizBisController = require('../controllers/matrizBisController');

router.get('/matrizBis/cargarDatosEnTabla', matrizBisController.cargarDatosEnTabla);

router.post('/matrizBis/agregarActividad', matrizBisController.agregarActividad);

module.exports = router;
