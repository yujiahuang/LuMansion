app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $provide) {
  
  // For any unmatched url, redirect to landing
  $urlRouterProvider.otherwise("/");

  // html5 url
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  
  // set up the states
  $stateProvider
    .state('landing', {
      url: "/",
      templateUrl: "/js/angular/views/landing.html",
      controller: 'landingCtrl'
    })
    .state('art', {
      url: "/art",
      templateUrl: "/js/angular/views/art.html"
    })
    .state('menu', {
      url: "/menu",
      templateUrl: "/js/angular/views/menu.html",
      resolve:　{
        galleryResource: 'menuResource',
        content: function(menuResource){
          return menuResource.get().$promise;
        }
      },
      controller: 'menuCtrl'
    })
    .state('menu.product', {
      url: '/:name',
      templateUrl: "/js/angular/views/product.html",
      controller: 'productCtrl'
    })
    // .state('history', {
    //   url: "/history",
    //   templateUrl: "/js/angular/views/history.html"
    // })
    .state('info', {
      url: "/info",
      templateUrl: "/js/angular/views/info.html"
    })
    .state('guide', {
      url: "/guide",
      templateUrl: "/js/angular/views/guide.html"
    })
    // .state('story', {
    //   url: "/story",
    //   templateUrl: "/js/angular/views/story.html"
    // })
    .state('about', {
      url: "/about",
      templateUrl: "/js/angular/views/about.html"
    })
    .state('friends', {
      url: "/friends",
      templateUrl: "/js/angular/views/friends.html"
    })
});
