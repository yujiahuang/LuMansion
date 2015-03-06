'use strict';

module.exports = function(app) {

  // Home route
  var index = require('../controllers/index');
  app.get('/', index.index);
  app.get('/content/art', index.art);
  app.get('/content/menu', index.menu);

  // overwrite page routes to index
  app.get('/guide', index.index);
  app.get('/menu', index.index);
  app.get('/menu/*', index.index);
  app.get('/art', index.index);
  app.get('/art/*', index.index);
  // app.get('/story', index.index);
  // app.get('/history', index.index);
  app.get('/friends', index.index);
  app.get('/about', index.index);
  app.get('/info', index.index);

};