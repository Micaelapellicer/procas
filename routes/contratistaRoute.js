const express = require("express");
const router = express.Router();

const contratistaController = require("../controllers/contratistaController");

router.get("/contratista", contratistaController.showContratistaForm);

module.exports = router;
