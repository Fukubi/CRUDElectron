const express = require('express');

const PessoaController = require('./controllers/PessoaController');

const routes = express.Router();

routes.get('/pessoas', PessoaController.index);
routes.post('/pessoas', PessoaController.create);
routes.delete('/pessoas/:id', PessoaController.delete);

module.exports = routes;
