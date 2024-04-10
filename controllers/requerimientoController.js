const path = require("path");

const requerimientoController = {
  showRequerimiento: (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "requerimiento.html"));
  },

  submitRequirement: (req, res) => {
    res.redirect("/dashboard");
  }
};

module.exports = requerimientoController;
