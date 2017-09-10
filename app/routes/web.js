
var clienteController = require('../controllers/clienteController');

/**
 * Arquivo para configurar as rotas dentro diretorio server.
 * exportando uma função que como parametro recebe um app .
 * toda a trativa do app esta no diretorio config.
 */
module.exports = function(app){
  app.get('/contato',function(req,res){
        console.log(cli.all()); // mostrando o nome do cliente
    res.render('site/contato');
  });

  app.get('/',function(req,res){

    clienteController.index(req,res);
   
   
  });

};