
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.map = function(req, res){
  // res.send("this is a map");
  res.render("map", { message: "passed msg"});
};