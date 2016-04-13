var http = require('http');
var express = require('express');
var app = express();
var morgan = require('morgan')

app.use(morgan('dev'));

app.use('/', require('./server/routes'));


var server = http.createServer(app).listen(4000, '127.0.0.1');

// app.listen(4000, function () {
//   console.log('RSS Maker listening on port 4000!');
// });