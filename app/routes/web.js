/**
 * Arquivo para configurar as rotas dentro diretorio route
 */
module.exports = function(app){
  app.get('/contato',function(req,res){
    res.render('site/contato');
  });

  app.get('/',function(req,res){
    res.render('site/home');
  });
};