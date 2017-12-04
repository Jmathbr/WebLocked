var express = require('express');
var consign = require('consign');
var expressValidator = require('express-validator')
var bodyParser = require('body-parser')
var app = express();
app.set('view engine', 'ejs');
app.set('views','./app/views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())


consign()
    .then('app/controllers')
    .then('app/models')
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app)   

module.exports = app;
