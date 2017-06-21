var restify = require('restify');


function FipeClient(){
  this._cliente = restify.createJsonClient({
    url: 'http://fipeapi.appspot.com/api/1'
  });
}

FipeClient.prototype.obterMarcas = function(tipoVeiculo,callback){
  this._cliente.get(this._cliente.url['href']+ "/"+ tipoVeiculo +"/marcas.json",callback);
}

FipeClient.prototype.obterModelos = function(parametros,callback){
  
  var tipoVeiculo = parametros['tipoVeiculo'];
  var idMarca = parametros['idMarca'];
 
  this._cliente.get(this._cliente.url['href']+ "/"+ tipoVeiculo +"/veiculos/" + idMarca+".json",callback);
}


FipeClient.prototype.obterVeiculos = function(parametros,callback){

  var tipoVeiculo = parametros['tipoVeiculo'];
  var idMarca = parametros['idMarca'];
  var idModelo = parametros['idModelo'];
 
  this._cliente.get(this._cliente.url['href']+ "/"+ tipoVeiculo +"/veiculo/" + idMarca+ "/"+ idModelo +".json",callback);

}

FipeClient.prototype.obterVeiculo = function(parametros,callback){

  var tipoVeiculo = parametros['tipoVeiculo'];
  var idMarca = parametros['idMarca'];
  var idModelo = parametros['idModelo'];
  var idVeiculo = parametros['idVeiculo'];

 
  this._cliente.get(this._cliente.url['href']+ "/"+ tipoVeiculo + "/veiculo/" + idMarca+ "/" + idModelo + "/"+idVeiculo +".json",callback);

}



module.exports = function(){
  return FipeClient;
}

