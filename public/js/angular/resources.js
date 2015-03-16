app.factory('menuResource', ['$resource', function($resource) {

  return $resource('/content/menu');

}]);

app.factory('artResource', ['$resource', function($resource) {

  return $resource('/content/art');

}]);

app.factory('navbar', function(){

  return [
    { state: 'guide', name: '定目劇導覽', icon: "icon-paperplane" },
    // { state: 'history', name:　'文史背景', icon: "icon-script" },
    { state: 'menu', name: '食堂餐飲', icon: "icon-glass" },
    { state: 'art', name: '文創品', icon: "icon-canvas" },
    // { state: 'story', name: '影像故事', icon: "icon-film" },
    { state: 'info', name: '參觀資訊', icon: "icon-checkinalt" },
    { state: 'about', name: '關於我們', icon: "icon-support" }
    // ,{ state: 'friends', name: '合作夥伴', icon: "icon-phonebookalt" }
  ];

});

app.factory('footer', function(){

  today = new Date();
  return [

    "天開藏聆・異想盧經堂厝",
    "台南市安平區安平路 802 號",
    "Copyright © " + today.getFullYear() + " 異想電影有限公司. All rights reserved"

  ];

});