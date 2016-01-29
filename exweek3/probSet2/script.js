// var firstReverse = function(string) {
// 	var reversed = string.split('').reverse().join('');
// 	return reversed
// };

// console.log(firstReverse('hello'));


var swapCase = function(string) {
	var split = string.split(' ');
	for(i = 0; i < split.length; i++) {
		console.log(split)
		// console.log(split[i])
		for(j = 0; j < split[i].length; j++) {
			console.log(split[i].split[j])
			if(j === 0) {
				// console.log(split[j]);
				split[j].toLowerCase();
			} else {
				split[j].toUpperCase();
			}
		}
}
	// console.log(split)
}

swapCase('hello there');