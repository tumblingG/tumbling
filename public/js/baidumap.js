//init Map
var map = new BMap.Map('map');
//disableScrollWheelZoom
map.disableScrollWheelZoom();
//enable to drag map
map.enableDragging();
//get city form IP
var myCity = new BMap.LocalCity();
myCity.get(function (result) {
	console.log(result);
	var cityName = result.name;
	//set map by city name
	map.centerAndZoom(cityName,12);
	//add marker
	var myIcon = new BMap.Icon("images/fox.gif", new BMap.Size(300,157));
	var marker = new BMap.Marker(result.center,{icon:myIcon});  // 创建标注
	map.addOverlay(marker); 
});
// add geolocationControl
// var geolocationControl = new BMap.GeolocationControl();
// geolocationControl.addEventListener("locationSuccess", function(e){
	// geolocation success
	// map.setCenter(e.addressComponent.city);
	//add marker
// 	map.clearOverlays();
// 	var myIcon = new BMap.Icon("images/fox.gif", new BMap.Size(300,157));
// 	var marker = new BMap.Marker(e.point,{icon:myIcon});  // 创建标注
// 	map.addOverlay(marker); 
// });
// geolocationControl.addEventListener("locationError",function(e){
//     // geolocation failure
//     alert(e.message);
//   });
// map.addControl(geolocationControl);

var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_SMALL});
map.addControl(top_right_navigation);