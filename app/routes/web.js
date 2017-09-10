
var clienteController = require('../controllers/clienteController');

/**
 * Arquivo para configurar as rotas dentro diretorio server.
 * exportando uma função que como parametro recebe um app .
 * toda a trativa do app esta no diretorio config.
 */
module.exports = function (app) {
  app.get('/contato', function (req, res) {
    res.render('site/contato');
  });

  app.get('/', function (req, res) {

    clienteController.index(req, res);


  });

  // recebendo parametros na requisição
  app.get('/detalhe/:id', function (req, res) {
    //console.log(req.params.id); recebendo os paramentro da url
    clienteController.show(req, res); // enviando a request e a responde para a controller !! 


  });

  // criando o methodo post
  app.post('/', function (req, res) {

    clienteController.salvar(req, res);


  });


};