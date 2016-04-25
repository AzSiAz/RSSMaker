var express = require('express');
var app = express();
var morgan = require('morgan');
var compress = require('compression');

app.use(compress());

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use('/', require('./server/routes'));


module.exports = app;

// app.listen(4000, '0.0.0.0');