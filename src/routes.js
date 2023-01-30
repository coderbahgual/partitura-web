const express = require('express');

const routes = express.Router(); // desacoplar modulo de rotas do express em uma nova variavel

routes.get('/', (req, res) =>{
    res.send('Hello World');
  });

// routes.post('/ongs', async(request, response) => { // => arrow function // async == assincrona
    // const params = request.query; // query
    // const params = request.params; // route ex.: '/users/:id'
    // const params = request.body; // body ex.: app.post(...
    // console.log(params);

    // const data = request.body;
    // console.log(data);
// }); // rota, funcao

module.exports = routes;