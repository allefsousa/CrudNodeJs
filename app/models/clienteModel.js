
/**
 * trabalhando com modularização para organização do codigo
 */

// adicionando a dependencia do mysql ao modulo.
/**
 * Criando a conexão com o banco de dados 
 */
var db = require('../../config/db')







module.exports = function () {

    // this = faz referencia a toda a função.
    // função para retornar um cliente
    this.all = function (retorno) {
        var con = db();


        /** fazendo uma consulta no banco de dados , pasando como paramentro
        *  na função o valor a ser retornado*/
        return con.query('SELECT * FROM curso_node.clientes;', retorno);

    };


    this.find = function (id, retorno) {
        var con = db();


        /** fazendo uma consulta no banco de dados , pasando como paramentro
        *  na função o primeiro um Id a ser consultado e no segundo a resposta da colsulta */
        return con.query('SELECT * FROM curso_node.clientes where id = ?;', id, retorno);


    };

    /**  salvando os dados , porem a biblioteca mysql ja entende que a variavel dados contem
      * um json  e faz a inserção automaticamente mas os inputs do formulario tem que ter o mesmo nome dos campos nobanco de dados.
      */
    this.save = function (dados, retorno) {
        var con = db();

        return con.query('insert into clientes set ?', dados, retorno);
    };

    return this;

};
