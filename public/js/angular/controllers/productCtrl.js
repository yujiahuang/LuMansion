app.controller('productCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'navbar',
  function ($scope, $rootScope, $state, $stateParams, navbar) {

  $scope.show_nav = false;
  $scope.navbar_items = navbar;
  // console.log($rootScope.products[0]);

  if($state.current.name == "art.product"){
    $scope.state = "work";
    $scope.last_state = "art";
    $scope.origin_title = "詳細介紹";
  }
  else if($state.current.name == "menu.product"){
    $scope.state = "dish";
    $scope.last_state = "menu";
    $scope.origin_title = "名稱緣由";
  }
  
  $rootScope.products.forEach(function(p, i){

    // console.log( p.name + $stateParams.name );
    if(p.name == $stateParams.name) $scope.product = p;
    
  });




  // $scope.$on("$destroy", function(){
  //   // release the scroll when leaving this page
  //   $rootScope.fix_scroll = false;
  // });

}]);