const path = require("path");

const matrizController = {
  showMatriz: (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "matriz.html"));
  },
};

module.exports = matrizController;
