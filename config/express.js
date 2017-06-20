var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidadtor = require('express-validator');


module.exports = function(){


    var app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidadtor());

    load('controller',{cwd: 'app'})
        .then('client')
        .into(app);


    return app;    
}