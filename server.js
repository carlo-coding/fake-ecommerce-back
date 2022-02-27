const express = require("express");

/* const config = require("./config"); */

/* const cors = require("cors"); */

/* ******* Trayendo conexión a BD ******* */

const db = require("./config/db");

/* ******** Importando routers ******** */

const products = require("./routes/products");

/* ******* Utilizando los routers ******* */

products(app);

/* ******* Aplicación ******** */

const app = express();

/* ****** Usando middleware globales ****** */
/* app.use(express.urlencoded({extended:false})) */
app.use(express.json())
/* app.use(cors()) */

/* Definiendo mi puerto */

/* app.listen(config.port, () => {
  console.log("Servidor: http://localhost:" + config.port);
}); */

app.get("/", (req, res) => {
  return res.status(200).send("Hola, bienvenido");
});

app.listen("4000", () => {
  console.log("Servidor: http://localhost:4000");
});
