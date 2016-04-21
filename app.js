var http = require('http');
var express = require('express');
var app = express();
var morgan = require('morgan')

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use('/', require('./server/routes'));


var server = http.createServer(app).listen(4000, '0.0.0.0');