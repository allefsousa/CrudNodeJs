// adicionando o modulo de clientes  e ja executando a função com o () na frente;
var cli = require("../models/clienteModel")();


/**
 * implementando varios modulos podendo ser um para inserir outro para adicionar outro para listar e assim sucessivamente .
 * para que eles sejam chamados do quando forem realmente necessarios e manter uma boa organização do codigo.
 */
module.exports.index = function (req, res) {
    //criando um objeto de clientes
    cli.all(function (erro, resultado) {
        // renderizando a view e passando um objeto para ser acessado e exibido.
        // no caso um objeto de clientes
        res.render('site/index', { c: resultado });
    });



};
/**
 * modulo responsavel por chamar da model a função de savar e redicionar para pagina logo apos a inserção dos dados
 */
module.exports.salvar = function (req, res) {

    var dados = req.body; // pegando os dados do formulario e passando -os para o formato Json
    // para serem persistidos
  /*  console.log(dados); // exibindo os dados ja no formato Json
    return; // utilizado para parar a execução nesse ponto
*/

    cli.save(dados, function (erro, resultado) {
        if (!erro) {
             res.redirect("/");

        } else {
            console.log("Erro ao Adicionar Cliente !!");
        }

    });



};
module.exports.show = function (req, res) {

    cli.find(req.params.id, function (erro, resultado) {

        if (resultado[0] && !erro) {
            // renderizando a view e passando um objeto para ser acessado e exibido.
            // no caso um objeto de clientes
            res.render('site/detalhe', { cliente: resultado });
        } else {
            console.log("Esse Cliente Não Existe !!");
            // caso ocorra erro redirecionando para Home.
            res.redirect("/");
        }


    });


};