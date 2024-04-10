const express = require("express");
const router = express.Router();
const actividadController = require("../controllers/actividadController");

router.post("/submit-actividad", actividadController.submitForm);

module.exports = router;
