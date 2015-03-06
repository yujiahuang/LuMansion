app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $provide, ezfbProvider) {
  
  // For any unmatched url, redirect to landing
  $urlRouterProvider.otherwise("/");

  // html5 url
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  // ezfb settings
  ezfbProvider.setLocale('zh_TW');
  ezfbProvider.setInitParams({
    appId: '1571037283137092',
    version: 'v2.0'
  });
  
     
  
  // set up the states
  $stateProvider
    .state('landing', {
      url: "/",
      templateUrl: "/js/angular/views/landing.html",
      controller: 'landingCtrl'
    })
    .state('menu', {
      url: "/menu",
      templateUrl: "/js/angular/views/gallery.html",
      resolve:　{
        content: function(menuResource){
          return menuResource.get().$promise;
        }
      },
      controller: 'galleryCtrl'
    })
    .state('menu.product', {
      url: '/:name',
      templateUrl: "/js/angular/views/product.html",
      controller: 'productCtrl'
    })
    .state('art', {
      url: "/art",
      templateUrl: "/js/angular/views/gallery.html",
      resolve:　{
        content: function(artResource){
          return artResource.get().$promise;
        }
      },
      controller: 'galleryCtrl'
    })
    .state('art.product', {
      url: '/:name',
      templateUrl: "/js/angular/views/product.html",
      controller: 'productCtrl'
    })
    .state('info', {
      url: "/info",
      templateUrl: "/js/angular/views/info.html"
    })
    .state('guide', {
      url: "/guide",
      templateUrl: "/js/angular/views/guide.html"
    })
    .state('about', {
      url: "/about",
      templateUrl: "/js/angular/views/about.html"
    })
    // .state('friends', {
    //   url: "/friends",
    //   templateUrl: "/js/angular/views/friends.html"
    // })
});
