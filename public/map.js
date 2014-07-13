$(function () {
    console.log("map!!!")
    
    var latlng = new google.maps.LatLng(25.018034, 121.539059);
    var mapOptions = {
        zoom: 16, //初始放大倍數
        center: latlng, //中心點所在位置
        mapTypeId: google.maps.MapTypeId.ROADMAP //正常2D道路模式
    };

    var map = new google.maps.Map(
        document.getElementById("map_canvas"), mapOptions);

    $.getJSON("https://spreadsheets.google.com/feeds/cells/1eTacEDHaxK75ApbJ6U_V5RS7L9hxFIlqU0FdOciz7UA/od6/public/basic?alt=json", function(data) {
      //first row "title" column
      console.log("lala");


      for( i=7; i<data.feed.entry.length; i+=7){
        console.log(data.feed.entry[i].content.$t);
        if( data.feed.entry[i].content.$t == 'Y') {
            createMarker(map, data.feed.entry[i+1].content.$t, data.feed.entry[i+5].content.$t, data.feed.entry[i+6].content.$t);
        }
      }
    })
});

function createMarker(map, name, lat, lng)
{
    console.log(name);
    console.log(lat);
    console.log(lng);
    var latlng = new google.maps.LatLng(lat, lng);
    var marker = new google.maps.Marker({
        position: latlng, //經緯度
        title: name.toString(), //顯示文字
        animation: google.maps.Animation.DROP,
        labelContent: "NANA",
        labelAnchor: new google.maps.Point(22, 0),
        labelClass: "mapMarkerLabel",
        labelStyle: {opacity: 0.75},
        map: map //指定要放置的地圖對象
    });
}

function submitPressed()
{
    console.log('button pressed!');
}
