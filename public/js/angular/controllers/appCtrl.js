// global
var nav_collapse_width = 740;

app.controller('appCtrl', ['$scope', '$rootScope', '$window', 'navbar', 
  function ($scope, $rootScope, $window, navbar) {

  $scope.init = function(){

    $scope.expand = false;
    $rootScope.fix_scroll = false;

  }

  $scope.toggleExpand = function(){

    if(window.innerWidth < nav_collapse_width) $scope.expand = !$scope.expand;

  }

  $scope.navbar_items = navbar;

}]);