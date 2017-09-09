
// adicionando o modulo de clientes  e ja executando a função com o () na frente;
var cli = require("../models/clienteModel")();

/**
 * Arquivo para configurar as rotas dentro diretorio route
 */
module.exports = function(app){
  app.get('/contato',function(req,res){
        console.log(cli.all()); // mostrando o nome do cliente
    res.render('site/contato');
  });

  app.get('/',function(req,res){
     //criando um objeto de clientes
    var listaClientes = cli.all();

    res.render('site/index',{c:listaClientes});
  });
};