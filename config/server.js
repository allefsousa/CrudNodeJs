
/**
 * Configuração do servidor que vai rodar o App
 * mudallarizando  para limpar o arquivo app.jsg
 */

module.exports = function () {
  var express = require('express');
  var bodyParser = require('body-parser');
  var app = express();
  app.set('view engine', 'ejs');
  app.set('views', './app/views');

  // configurações do BodyParser para que possa utilizar o express junto com o bodyParser
  // para formatar os dados em formato JSON assim que o usuario adicionar no formulario.
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  var rotas = require('../app/routes/web');
  rotas(app);

  app.listen(8000, function () {
    console.log("localhost:8000");
  });

};



