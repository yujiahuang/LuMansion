
/**
 * Module dependencies.
 */

exports.server = function(){

  var express = require('express');
  var routes = require('./routes');
  var user = require('./routes/user');
  var http = require('http');
  var path = require('path');
  var config = require('../config/config');

  // database
  var mongoose = require('mongoose');
  // var db = mongoose.connect(config.db);

  var app = express();
  
  // all environments  
  app.set('port', process.env.PORT || config.port);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '../public')));

  // development only
  if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }

  var helper = require('./helper')(app, "passport");

  // routes
  // We skip the app/routes/middlewares directory as it is meant to be
  // used and shared by routes as further middlewares and is not a 
  // route by itself
  var routes_path = __dirname + '/routes';
  helper.execute(routes_path, ['middleware']);

  http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });

}
