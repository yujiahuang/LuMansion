app.controller('menuCtrl', ['$scope', 'content', '$location', '$anchorScroll', 
  function($scope, content, $location, $anchorScroll){

  console.log(content);
  $scope.products = content;

}]);

