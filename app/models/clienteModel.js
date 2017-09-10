
/**
 * trabalhando com modularização para organização do codigo
 */

 // adicionando a dependencia do mysql ao modulo.
 /**
  * Criando a conexão com o banco de dados 
  */
 var db = require('../../config/db')







module.exports = function(){

    // this = faz referencia a toda a função.
    // função para retornar um cliente
    this.all = function(retorno){
        var con = db();


         /** fazendo uma consulta no banco de dados , pasando como paramentro
         *  na função o primeiro um erro caso aconteça e o segunda o callback 
         * vai trazer o resultado. */
      return  con.query('SELECT * FROM curso_node.clientes;',retorno);
    

    };

    return this;

};
