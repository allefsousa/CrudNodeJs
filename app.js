// importando as configurações do servidor
var app = require('./config/server');

app.get('/',function(req,res){
    // renderizando os templates Engine Ejs que 
    // estao na pasta View -> site -> home
    res.render('site/index.ejs');
});

app.get('/contato',function(req,res){
    // renderizando os templates Engine Ejs que 
    // estao na pasta View -> site -> contato
    res.render('site/contato.ejs');
});

//  Informando a porta que o servidor local vai rodar e uma função de callback

app.listen(8000,function(){
    console.log("localHost: 8000");
})
