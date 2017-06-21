# fipeinfo

# 1-Sobre:
Api Consulta Tabela Fipe com NodeJS

Api feita em NodeJS que consume o serviço da api da FIPE para consultar valores de modelos de carros, motos ou caminhões.

Informações sobre a api: [API FIPE](http://fipeapi.appspot.com/)


# 2-Exemplos de uso da api:


  ## Recupera as marcas de carros, motos ou caminhões. Somente é aceito um dos três tipos de veiculos como parâmetros são eles: carros, motos ou caminhoes.

    ex: http://localhost:3000/veiculos/carros

  ### Retorno:

    [
        {
            "name": "AUDI",
            "fipe_name": "Audi",
            "order": 2,
            "key": "audi-6",
            "id": 6
        },
        {
            "name": "BMW",
            "fipe_name": "BMW",
            "order": 2,
            "key": "bmw-7",
            "id": 7
        },
        {
            "name": "CITROEN",
            "fipe_name": "Citroën",
            "order": 2,
            "key": "citroen-13",
            "id": 13
        },
        {
            "name": "FIAT",
            "fipe_name": "Fiat",
            "order": 2,
            "key": "fiat-21",
            "id": 21
        },
        ...
  ]  
      
      
      
    
  ## Recupera os modelos de carros, motos ou caminhões. Deve enviar o tipo de veiculo e o id da Marca como parâmetros.
    
   ex: http://localhost:3000/veiculos/carros/21
    
  ### Retorno:
    
    [
    ...
    {"key": "palio-4826", "name": "Palio 1.0 Celebr. ECONOMY F.Flex 8V 4p", "id": "4826", "fipe_name": "Palio 1.0 Celebr. ECONOMY F.Flex 8V 4p"},
    {"key": "palio-4827", "name": "Palio 1.0 ECONOMY Fire Flex 8V 2p", "id": "4827", "fipe_name": "Palio 1.0 ECONOMY Fire Flex 8V 2p"},
    {"key": "palio-4828", "name": "Palio 1.0 ECONOMY Fire Flex 8V 4p", "id": "4828", "fipe_name": "Palio 1.0 ECONOMY Fire Flex 8V 4p"},
    {"key": "palio-505", "name": "Palio 1.0/ Trofeo 1.0 Fire/ Fire Flex 2p", "id": "505", "fipe_name": "Palio 1.0/ Trofeo 1.0 Fire/ Fire Flex 2p"},
    ...
    ]

   ## Recupera os veiculos de acordo com o modelo informado. Deve enviar o tipo de veiculo , o id da Marca e o id do Modelo.
   
   ex: http://localhost:3000/veiculos/carros/21/4828
   
   ### Retorno:
   
   [
    {
        "fipe_marca": "Fiat",
        "fipe_codigo": "2014-1",
        "name": "2014 Gasolina",
        "marca": "FIAT",
        "key": "2014-1",
        "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
        "id": "2014-1"
    },
    {
        "fipe_marca": "Fiat",
        "fipe_codigo": "2013-1",
        "name": "2013 Gasolina",
        "marca": "FIAT",
        "key": "2013-1",
        "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
        "id": "2013-1"
    },
    {
        "fipe_marca": "Fiat",
        "fipe_codigo": "2012-1",
        "name": "2012 Gasolina",
        "marca": "FIAT",
        "key": "2012-1",
        "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
        "id": "2012-1"
    },
    {
        "fipe_marca": "Fiat",
        "fipe_codigo": "2011-1",
        "name": "2011 Gasolina",
        "marca": "FIAT",
        "key": "2011-1",
        "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
        "id": "2011-1"
    },
    {
        "fipe_marca": "Fiat",
        "fipe_codigo": "2010-1",
        "name": "2010 Gasolina",
        "marca": "FIAT",
        "key": "2010-1",
        "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
        "id": "2010-1"
    },
    {
        "fipe_marca": "Fiat",
        "fipe_codigo": "2009-1",
        "name": "2009 Gasolina",
        "marca": "FIAT",
        "key": "2009-1",
        "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
        "id": "2009-1"
    }
  ]

   ## Recupera as informações do veículo selecionado. Deve enviar o tipo de veiculo , o id da Marca, o id do Modelo e o id do veículo.

        ex: http://localhost:3000/veiculos/carros/21/4828/2013-1

   ### Retorno:

    {
        "referencia": "junho de 2017",
        "fipe_codigo": "001267-0",
        "name": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
        "combustivel": "Gasolina",
        "marca": "Fiat",
        "ano_modelo": "2013",
        "preco": "R$ 22.292,00",
        "key": "palio-2013",
        "time": 0.010000000000001563,
        "veiculo": "Palio 1.0 ECONOMY Fire Flex 8V 4p",
        "id": "2013"
    }


  # 3- Desenvolvedor:
  
  ### [Marcelo Lima Bicalho](https://www.linkedin.com/in/marcelolimabh/)
    
    
   
    

    



