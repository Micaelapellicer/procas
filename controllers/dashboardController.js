const path = require("path");

const dashboardController = {
  showDashboard: (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "dashboard.html"));
  },
  processDashboardForm: (req, res) => {
    const { data } = req.body;
    res.redirect("/dashboard");
  }
};
module.exports = dashboardController;
