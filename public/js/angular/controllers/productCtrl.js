app.controller('productCtrl', ['$scope', '$stateParams', 'navbar',
  function ($scope, $stateParams, navbar) {

  $scope.name = $stateParams.name;
  $scope.show_nav = false;
  $scope.navbar_items = navbar;

  // $scope.$on("$destroy", function(){
  //   // release the scroll when leaving this page
  //   $rootScope.fix_scroll = false;
  // });

}]);