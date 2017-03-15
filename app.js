var express = require('express');
var yaml    = require('js-yaml');
var fs      = require('fs');
var app     = express();

module.exports = function(port, path, callback) {
    app.use(express.static('public', {
      setHeaders: function(res, path) {
        var regexp = /\.(.+)$/;
        if(!regexp.test(path)) {
          res.setHeader('Content-type', 'text/html');
        }
      }
    }));

    return app.listen(port, callback);
}
