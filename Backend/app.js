const express = require('express');
const app = express();
const postRoutes = require("./routes/posts");
//Import de las rutas

app.use(express.json());
app.use(express.urlencoded({extends: false}));

//Configuracion de la conecion a la DB

app.use("/api/posts",postRoutes);

module.exports =app;