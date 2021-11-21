//Importacion del modulo express bajo el alias 'express'
const express = require('express');
//Genera una nueva instancia de express
const app = express();
//Se define en una constante el número de puerto sobre el que se va a ejecutar el servidor
const port = 3000;

//Se define el metodo de escucha de tipo GET en la ruta raiz y la respuesta que se dará a esta petición,
//En este caso, se devuelve el mensaje con el texto "Hello world"
app.get('/', (req, res) => {
  res.send('Hello World!');
})

//Se coloca a escuchar(Ejecutar) el servidor web con el uso del método listen, el método listen recibe dos parámetros,
//El puerto en el que se va a escuchar el servidor y una funcion anonima con una ejecucion de codigo al momento de montar el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})