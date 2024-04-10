const path = require("path");

const maestroController = {
  showMaestro: (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "maestro.html"));
  },
  redirectToMatriz: (req, res) => {
    res.redirect("/matriz");
  },
  redirectToDashboard: (req, res) => {
    res.redirect("/dashboard"); 
  },
};

module.exports = maestroController;
