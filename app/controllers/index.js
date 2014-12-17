
/*
 * GET home page.
 */
var mongoose = require('mongoose'),
    User = require('../models/user.js'),
    fs = require('fs');

exports.index = function(req, res){
  res.render('index', { title: '天開藏聆・異想盧經堂厝' });
};

exports.content = function(req, res){
  console.log(req.params.page);
  // parse a json, return the correct page content
  res.json({test: [1, 2, 3]});
}

exports.menu = function(req, res){

  var all_files = fs.readdirSync("./public/images/menu/food");
  var products = {};

  all_files.forEach(function(file, index){

    var i = file.lastIndexOf('.');
    if(['jpg', 'png'].indexOf(file.substr(i+1)) >= 0){
      
      var name = file.split('.')[0];
      products[name] = {
        url: "/images/menu/food/" + file
      };

    }
    

  });
  
  res.json(products);

}