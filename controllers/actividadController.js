const actividadController = {
  submitForm: (req, res) => {
    const { category, title, description } = req.body;
    res.send("Formulario de actividad enviado correctamente");
    }
  };
  
  module.exports = actividadController;
  