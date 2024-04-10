const express = require("express");
const router = express.Router();
const requerimientoController = require("../controllers/requerimientoController");

router.get("/requerimiento", requerimientoController.showRequerimiento);

router.post("/submit-requirement", requerimientoController.submitRequirement);

module.exports = router;
