var express = require('express');
var yaml    = require('js-yaml');
var fs      = require('fs');
var app     = express();

//var doc = yaml.safeLoad(fs.readFileSync('/home/ixti/example.yml', 'utf8'));

app.use(express.static('public'));

app.use('/for_employers', express.static('public/for_employers.html'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
