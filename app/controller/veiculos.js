module.exports = function(app){

    app.get("/veiculos", function(req, res){

        
        var tipoVeiculo = req.param.tipoVeiculo;
        

        console.log(tipoVeiculo);
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
}