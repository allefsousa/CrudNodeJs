
/**
 * trabalhando com modularização para organização do codigo
 */

 // adicionando a dependencia do mysql ao modulo.
 /**
  * Criando a conexão com o banco de dados 
  */
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'curso_node'
});





module.exports = function(){

    // this = faz referencia a toda a função.
    // função para retornar um cliente
    this.all = function(){


         /** fazendo uma consulta no banco de dados , pasando como paramentro
         *  na função o primeiro um erro caso aconteça e o segunda o callback 
         * vai trazer o resultado. */
        con.query('SELECT * FROM curso_node.clientes;',function(erro,resultado){
            /**
             * verificando se deu erro na consulta e exibindo o erro no log
             */
            if(erro){
                    console.error('Error Conect: ', erro.stack);

            }else{
                 console.log(resultado);
            }
        });



        return[
        {nome:"Allef",email:"allefsousa_1@hotmail.com",nome:"Bruna Mendes",email:"Brunacarolina@email.com"}
        ];
    };

    return this;

};
