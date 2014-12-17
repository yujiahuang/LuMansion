app.run(function($rootScope){

  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState) {
    
    // make the page scroll to top when state changes
    if(checkScrollTop(toState, fromState)) // don't scroll unders some special conditions
      document.body.scrollTop = document.documentElement.scrollTop = 0;

    // setup whether the scroll bar should be fixed
    if(toState.name == "menu.product") $rootScope.fix_scroll = true;
    if(fromState.name == "menu.product") $rootScope.fix_scroll = false;
  });
  
});

function checkScrollTop(toState, fromState) {

  if(fromState.name == "menu" && toState.name == "menu.product") return false;
  else if(fromState.name == "menu.product" && toState.name == "menu") return false;
  else return true;

}