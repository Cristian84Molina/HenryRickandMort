const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index.js')


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});


server.use(express.json())
server.use("/rickandmorty", router)




server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});









/* const http = require("http");
const getCharById = require('./controllers/getCharById');


http
  .createServer((req, res) => {
    
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    const { url } = req; */

    /* if (url.includes('/rickandmorty/character')) {
        const id = parseInt(url.split('/').pop()); // Obtener el ID del final de la URL y lo convertimos en entero con parseInt
        const characterData = character.find((char) => char.id === id); // Buscar el personaje por ID, find trae
        res.end(JSON.stringify(characterData)); // Devolver el personaje como JSON
      }  */
      /* if (url.includes('/rickandmorty/character')) {
        const id = parseInt(url.split('/').pop());
        getCharById(res, id);
      }  
  })
.listen(3001, "localhost");
 */

