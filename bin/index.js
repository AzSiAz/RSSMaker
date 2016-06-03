#! /usr/bin/env node

var app = require('../');

app.listen(5000, '0.0.0.0', function (err) {
  if (err) throw err;
  console.log('Server listening on :5000');
});
