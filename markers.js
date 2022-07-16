/*
function marker(){

  	var markerContainer = document.getElementById("markers");
	
	var marker = markerContainer.getElementsByClassName("markers__marker");

	for (var i = 0; i < marker.length; i++) {
	  marker[i].addEventListener("click", function() {
	    var current = document.getElementsByClassName("marker-active");
	    current[0].className = current[0].className.replace(" marker-active", "");
	    this.className += " marker-active";
	  });
	}
} 

marker();
*/