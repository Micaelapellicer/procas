const path = require('path');

const contratistaController = {
    showContratistaForm: (req, res) => {
      res.sendFile(path.join(__dirname, "../public", "contratista.html"));
    },
    registerUser: (req, res) => {
      const { nombre, email, telefono } = req.body;
      res.status(200).send("Usuario registrado correctamente");
    },
  };

  module.exports = contratistaController;
  