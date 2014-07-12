
/*
 * GET home page.
 */
var mongoose = require('mongoose'),
    User = require('../models/user.js');

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
