'use strict';

module.exports = function(app) {

  // Home route
  var user = require('../controllers/user');
  app.get('/users', user.list);

};