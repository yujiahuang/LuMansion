'use strict';

var fs = require('fs');

module.exports = function (app, passport){

  return {
    
    execute : function (path, exclude) {

      fs.readdirSync(path).forEach(function(file) {

        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {

          if (/(.*)\.(js$|coffee$)/.test(file)) {
            require(newPath)(app, passport);

          }

        }
        else if (stat.isDirectory() && exclude.indexOf(file) == -1) {

          execute(newPath);

        }
      });
    }

  }

};