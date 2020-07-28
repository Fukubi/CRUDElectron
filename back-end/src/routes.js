const express = require('express');

const PessoaController = require('./controllers/PessoaController');

const routes = express.Router();

routes.get('/pessoas', PessoaController.index);

routes.post('/pessoas', PessoaController.create);

routes.delete('/pessoas/:id', PessoaController.delete);

routes.put('/pessoas/nome', PessoaController.updateName);

routes.put('/pessoas/telefone', PessoaController.updateTelefone);

routes.put('/pessoas/email', PessoaController.updateEmail);

module.exports = routes;
