module.exports = function(app){

   
   
   /**
    * Recupera as Marcas do tipo de Veiculos  que aceita três possíveis valores: carros, motos ou caminhoes.
    * param: tipoVeiculo
    * athor: Marcelo Bicalho
    */
    app.get('/veiculos/:tipoVeiculo', function(req, res){

        
        var tipoVeiculo = req.params.tipoVeiculo;
        
        var fipeClient = new app.client.FipeClient();

        fipeClient.obterMarcas(tipoVeiculo, function(exception, request, response, resultado){

            if(exception){
                console.log(exception);
                res.status(400).send(exception);
            }

            //console.log(resultado);
            res.status(200).json(resultado);
        });

    });

    /**
    * Recupera os Modelos da marca selecionada .
    * param: tipoVeiculo
    * param: idMarca
    * athor: Marcelo Bicalho
    */
    app.get('/veiculos/:tipoVeiculo/:idMarca', function(req, res){

        var fipeClient = new app.client.FipeClient();
        var parametros = 
            {
            'tipoVeiculo': req.params.tipoVeiculo,
            'idMarca': req.params.idMarca
             };

        fipeClient.obterModelos(parametros, function(exception, request, response, resultado){

            if(exception){
                console.log(exception);
                res.status(400).send(exception);
            }

            res.status(200).json(resultado);

        });

    });


    /**
    * Recupera os Veiculos/Ano do modelo selecionada .
    * param: tipoVeiculo
    * param: idMarca
    * param: idModelo
    * athor: Marcelo Bicalho
    */
    app.get('/veiculos/:tipoVeiculo/:idMarca/:idModelo', function(req, res){


            var fipeClient = new app.client.FipeClient();

            var parametros = {
                'tipoVeiculo': req.params.tipoVeiculo,
                'idMarca': req.params.idMarca,
                'idModelo': req.params.idModelo
             };


            fipeClient.obterVeiculos(parametros, function(exception, request, response, resultado){

                    if(exception){
                        console.log(exception);
                        res.status(400).send(exception);
                    }

                    res.status(200).json(resultado);

             });
      
    });

    /**
    * Recupera as informacoes do veiculo de acordo com o id selecionado.
    * param: tipoVeiculo
    * param: idMarca
    * param: idModelo
    * param: idVeiculo
    * athor: Marcelo Bicalho
    */
     app.get('/veiculos/:tipoVeiculo/:idMarca/:idModelo/:idVeiculo', function(req, res){


            var fipeClient = new app.client.FipeClient();

            var parametros = {
                'tipoVeiculo': req.params.tipoVeiculo,
                'idMarca': req.params.idMarca,
                'idModelo': req.params.idModelo,
                'idVeiculo': req.params.idVeiculo
             };


            fipeClient.obterVeiculo(parametros, function(exception, request, response, resultado){

                    if(exception){
                        console.log(exception);
                        res.status(400).send(exception);
                    }

                    res.status(200).json(resultado);

             });
      
    });
}