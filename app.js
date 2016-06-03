var express = require('express');
var yaml    = require('js-yaml');
var fs      = require('fs');
var app     = express();

app.use(express.static('public', {'setHeaders': setHeaders}));

function setHeaders(res, path) {
  var regexp = /\.(.+)$/;
  if(!regexp.test(path)) {
    res.setHeader('Content-type', 'text/html');
  }
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
