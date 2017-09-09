
/**
 * Configuração do servidor que vai rodar o App
 */

var express = require ('express');

var app = express();

app.set('view engine','ejs');

module.exports = app;



