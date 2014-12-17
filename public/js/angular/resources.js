app.factory('menuResource', ['$resource', function($resource) {

  return $resource('/content/menu');

}]);

app.factory('navbar', function(){

  return [
    { state: 'guide', name: '主題導覽', icon: "icon-paperplane" },
    // { state: 'history', name:　'文史背景', icon: "icon-script" },
    { state: 'menu', name: '餐飲商品  ', icon: "icon-glass" },
    { state: 'art', name: '藝文展演', icon: "icon-canvas" },
    // { state: 'story', name: '影像故事', icon: "icon-film" },
    { state: 'info', name: '參觀資訊', icon: "icon-checkinalt" },
    { state: 'about', name: '關於我們', icon: "icon-support" },
    { state: 'friends', name: '協力廠商', icon: "icon-phonebookalt" }
  ];

});