var arrayPoints = [];
var arrayId = arrayPoints.length;



window.addEventListener('load', function() {
	
	var map = document.getElementById("map");

	map.addEventListener('click', function() {
		var x = event.clientX;
		var y = event.clientY;
		console.log(arrayPoints);
		// console.log(x);
		// console.log(y);
		createPoint(map, x, y);

	});

	var marker = document.getElementById("marker");
	marker.addEventListener('click', function() {
		var x = event.clientX;
		var y = event.clientY;
		console.log(arrayPoints);
		for(i = 0; i < arrayPoints.length; i++) {
			if(arrayPoints[i].x === x && arrayPoints[i].y === y) {
				removePoint(arrayPoints[i].arrayId);
			}
		}
		

	});
});



var createPoint = function(map, x, y) {
	var img = document.createElement("img");
	var marker = document.getElementById("marker");
	img.src = "map-marker-small-md.png";
	img.height = 40;
	img.width = 33.2;
	img.style.left = x + "px";
	img.style.top = y + "px";
	img.setAttribute('id', 'mapPoint' + arrayId);
	marker.appendChild(img);
	arrayPoints.push({arrayId:arrayId++, x:x, y:y});

	// console.log(arrayPoints);
}

var removePoint = function(id) {

	document.getElementById('mapPoint' + id).remove();
	arrayPoints.splice(id, 1);
}
	

