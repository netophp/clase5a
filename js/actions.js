// acciones
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		//Brújula
		$('#bInc').tap(function(){
		 watchID = navigator.compass.watchHeading(function (heading) {
			$('#bRes').text(heading.magneticHeading);
		}, function onError(compassError) {
				alert('Compass error: ' + compassError.code);
		}, { frequency: 500 });
	   });
	   $('#bDtn').tap(function(){
		   navigator.compass.watchHeading(watchID);
		   watchID = null;
		   $('#bRes').text(0.000);
		   }
	   
	   );
	},false);
});