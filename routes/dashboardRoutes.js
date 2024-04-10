const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/dashboard", dashboardController.showDashboard);

router.post("/dashboard/process-form", dashboardController.processDashboardForm);

module.exports = router;
