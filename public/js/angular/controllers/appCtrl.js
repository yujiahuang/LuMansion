// global
var nav_collapse_width = 740;

app.controller('appCtrl', ['$scope', '$rootScope', '$window', '$state', 'navbar', 'footer', 
  function ($scope, $rootScope, $window, $state, navbar, footer) {

  $scope.init = function(){

    $scope.expand = false;
    $rootScope.fix_scroll = false;

  }

  $scope.toggleExpand = function(){

    if(window.innerWidth < nav_collapse_width) $scope.expand = !$scope.expand;
    else $state.go("landing");

  }

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
    $scope.expand = false;
  });
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    $scope.state = $state.current.name;

  });


  $scope.navbar_items = navbar;
  $scope.footer_items = footer;

}]);