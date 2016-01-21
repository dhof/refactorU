var letterCapitalize = function(aString) {
// var aString = "hello there guy buddy";
	var splitMe = aString.split(" ");

	for (var i = 0; i < splitMe.length; i++) {
		splitMe[i] = splitMe[i].charAt(0).toUpperCase() + splitMe[i].slice(1);
	}
	aString = splitMe.join(' ');
	document.write(aString);
}

var wordCount = function(string) {
	totalNumber = string.split(" ").length;
	document.write(totalNumber);
}

var primeTime = function(num) {
	var rooted = Math.sqrt(num);
	for(var i = 2; i <= rooted; i++) {
		if (num % i === 0) {
		console.log(false);
		}  
	}
	console.log(true);
}
	

