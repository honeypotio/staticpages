var express = require('express');
var yaml    = require('js-yaml');
var fs      = require('fs');
var app     = express();

module.exports = function() {
    app.use(express.static('public', {
      setHeaders: function(res, path) {
        var regexp = /\.(.+)$/;
        if(!regexp.test(path)) {
          res.setHeader('Content-type', 'text/html');
        }
      }
    }));

    app.listen(4000, function () {
      console.log('Running app on port 4000!');
    });
}
