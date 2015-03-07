app.controller('galleryCtrl', ['$scope', '$rootScope', '$state', 'content', '$location', '$anchorScroll', 
  function ($scope, $rootScope, $state, content, $location, $anchorScroll){

  $scope.init = function () {

    // prepare products data
    products = [];
    data = content.data;
    $scope.types = [];

    for (var key in data){

      $scope.types.push({key: key, name: data[key].name});
      data[key].items.forEach(function(e, i){

        e.type = key;
        products.push(e);

      });
    }

    $rootScope.products = products;

    // some other variables
    // console.log(products);
    $scope.type = '';
    $scope.state = $state.current.name;
    if($scope.state.indexOf('.') > -1) {
      $scope.state = $scope.state.substr(0, $scope.state.indexOf('.'));
    }
    $scope.cover = content.cover;

  }

  $scope.filter = function(type){

    $scope.type = type;
    $("html, body").stop().animate({scrollTop: $(".gallery").height() * 0.8 - 48}, "fast");

  }


}]);

