//21/12/2020 -  TESTE EJS - Novo código que informa ao express que o engine de view está em EJS.

var expressTeste = require('express');  
var msg = require('./commonTeste');   //22/12/2020 - fazendo a requisição do módulo o commonTeste.

var funcExpressTeste = expressTeste();       

//Passando essa informação para o express, ou seja, agora está definido que o ejs é View Engine.
funcExpressTeste.set('view engine', 'ejs');

// A implementação em EJS será um pouco diferente agora, por meio do método RENDER:
  funcExpressTeste.get('/', function(requi, respos){
      respos.render("tubarao/martelo.ejs"); //Vai passar agora o arquivo que será RENDERIZADO quando a requisição for feita.



});       

funcExpressTeste.listen(3000, function(){

    
    console.log(msg); //22/12/2020 -- imprimindo na tela o que está no módulo commonTestes.js e foi requirido dentro desse programa. 

});

//Agora instalei o Nodemon, ou seja, as alterações estão sendo identificadas em tempo real, Nodemon NÃO é um módulo, é apenas um utilitário. 
