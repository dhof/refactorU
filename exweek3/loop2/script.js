var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// var animalsList = function() {
// for (var i = 0; i < animals.length; i++) {
// 	console.log(animals[i]);
// };
// };

// var animalsList = function() {
// for (var i = 0; i < animals.length -1; i++) {
// 	console.log(animals[i]);
// };
// };

// var animalsList = function() {
// for (var i = 0; i < animals.length; i += 2) {
// 	console.log(animals[i]);
// };
// };


// var animalsList = function() {
// for (var i = animals.length - 1; i >= 0; i --) {
// 	console.log(animals[i]);
// };
// };
// animalsList();

var animalsList = function() {
for (var i = animals.length - 1; i >= 0; i --) {
	if (i === 0 || i === animals.length - 1) {
		console.log(animals[i]);
	} else {
		console.log(animals[i]);
		console.log(animals[i]);
	}
};
};
animalsList();