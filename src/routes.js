const express = require('express');

const ProgramController = require('./controller/ProgramController');

const routes = express.Router(); // desacoplar modulo de rotas do express em uma nova variavel

routes.get('/', ProgramController.index);
routes.get('/index', ProgramController.index);
routes.get('/sheet/:key', ProgramController.sheet);
routes.get('/hash', ProgramController.hash);

// routes.post('/ongs', async(request, response) => { // => arrow function // async == assincrona
    // const params = request.query; // query
    // const params = request.params; // route ex.: '/users/:id'
    // const params = request.body; // body ex.: app.post(...
    // console.log(params);

    // const data = request.body;
    // console.log(data);
// }); // rota, funcao

module.exports = routes;