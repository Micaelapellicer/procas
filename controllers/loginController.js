const path = require("path");

const loginController = {
  showLoginForm: (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "login.html"));
  },

  handleLogin: (req, res) => {
    const { usuario, password } = req.body;

    if (usuario === "admin" && password === "admin") {
      res.redirect("/dashboard");
    } else {
      res.status(401).send("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  }
};
module.exports = loginController;
