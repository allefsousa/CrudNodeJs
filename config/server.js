
/**
 * Configuração do servidor que vai rodar o App
 */

var express = require ('express');

var app = express();

app.set('view engine','ejs');
app.set('views','./app/views') // mudando o diretorio da View (Passando View e caminho)

module.exports = app;



