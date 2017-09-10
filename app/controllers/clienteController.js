// adicionando o modulo de clientes  e ja executando a função com o () na frente;
var cli = require("../models/clienteModel")();


/**
 * implementando varios modulos podendo ser um para inserir outro para adicionar outro para listar e assim sucessivamente .
 * para que eles sejam chamados do quando forem realmente necessarios e manter uma boa organização do codigo.
 */
module.exports.index = function(req,res){
      //criando um objeto de clientes
   cli.all(function (erro,resultado){
      // renderizando a view e passando um objeto para ser acessado e exibido.
    // no caso um objeto de clientes
         res.render('site/index',{c:resultado});
    });


};
module.exports.store = function(){

};
module.exports.show = function(){

};