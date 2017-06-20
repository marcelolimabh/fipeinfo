var restify = require('restify');


function FipeClient(){
  this._cliente = restify.createJsonClient({
    url: 'http://fipeapi.appspot.com/api/1'
  });
}

FipeClient.prototype.obterMarcas = function(tipoVeiculo,callback){
  this._cliente.get(this._cliente.url['href']+ "/"+ tipoVeiculo +"/marcas.json",callback);
}


module.exports = function(){
  return FipeClient;
}

