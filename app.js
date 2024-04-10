
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express(); 
const PORT = process.env.PORT || 3000;

//controladores
const loginController = require("./controllers/loginController.js");
const dashboardController = require("./controllers/dashboardController");
const requerimientoController = require("./controllers/requerimientoController");
const actividadController = require("./controllers/actividadController");
const contratistaController = require("./controllers/contratistaController");
const maestroController = require('./controllers/maestroController');
const matrizController = require("./controllers/matrizController")
const matrizBisController = require('./controllers/matrizBisController');
//rutas
const routes = require("./routes/index.js");
const dashboardRoutes = require("./routes/dashboardRoutes");
const requerimientoRoute = require("./routes/requerimientoRoute.js");
const actividadRoute = require("./routes/actividadRoute");
const contratistaRoutes = require("./routes/contratistaRoute.js"); 
const maestroRoute = require('./routes/maestroRoute');
const matrizRoutes = require("./routes/matrizRoutes");
const matrizBisRoute = require('./routes/matrizBisRoute');

// Middleware para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Ruta para servir archivos estáticos (por ejemplo, CSS)
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

// Usa las rutas definidas en routes/index.js
app.use("/", routes);
app.use("/", dashboardRoutes);
app.use("/", requerimientoRoute);
app.use("/", actividadRoute);
app.use("/", contratistaRoutes); 
app.use('/', maestroRoute);
app.use("/", matrizRoutes);
app.use("/matrizBis", matrizBisRoute);

// Ruta para la página de inicio
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Ruta para la página de dashboard
app.get("/dashboard.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});
app.get("/maestro.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "maestro.html"));
});
app.get("/requerimiento.html", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "requerimiento.html"));
});

app.get('/matriz.html', (req, res) => {
  // Lógica para manejar la solicitud y enviar la página matriz.html
  res.sendFile(path.join(__dirname, 'public', 'matriz.html'));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get('/matrizBis.html', (req, res) => {
  // Lógica para manejar la solicitud y enviar la página matriz.html
  res.sendFile(path.join(__dirname, 'public', 'matrizBis.html'));
});

app.get('/actividad.html', (req, res) => {
  // Lógica para manejar la solicitud y enviar la página matriz.html
  res.sendFile(path.join(__dirname, 'public', 'actividad.html'));
});

app.get("/dashboard", dashboardController.showDashboard);


app.get("/matriz", matrizController.showMatriz);
app.get('/maestro', maestroController.showMaestro);
app.get("/requerimiento", requerimientoController.showRequerimiento);
app.get("/contratista", contratistaController.showContratistaForm);


// Nueva ruta para manejar el formulario de inicio de sesión (POST)
app.post("/login", loginController.handleLogin);

app.post("/submit-requirement", requerimientoController.submitRequirement);
app.post("/submit-actividad", actividadController.submitForm);

app.post("/contratista/registerUser", contratistaController.registerUser);

app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en http://localhost:${PORT}`);
});


