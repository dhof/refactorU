// var getName = function(obj) {
// 	return obj.name
// }

// console.log(getName({name:'devon',age:31}))

// var totalLetters = function(array) {
// 	var total = 0;
// 	for(i = 0; i < array.length; i++) {
// 		total += array[i].length;
// 	}
// 	return total;
// } 



// var keyValue = function(key, value) {
// 	return '{' + key + ': ' + value + '}';
// }

// console.log(keyValue('color', 'green'));

// var negativeIndex = function(array, position) {
// 	return array[array.length + position];
// }

// console.log(negativeIndex(['dog','cat','bat','tiger'], -1));

// var removeM = function(string) {
// 	var splitMe = string.split("m");
// 	var joined = splitMe.join("");
// 	return joined;
	
// }

// console.log(removeM("mammal there guy man"));


// var printObject = function(obj) {
// 	for (var prop in obj) {
// 		console.log(prop + " is " + obj[prop]);
// 	}
// }

// printObject({a: 10, b: 20, c: 30})

// var vowels = function(string) {
// 	var vowelOutput = [];
// 	for(i = 0; i < string.length; i++) {
// 		if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'y') {
// 		vowelOutput.push(string[i]);
// 		}
// 	}
// 	return vowelOutput;
// }

// console.log(vowels('i like me some vowels'));


// var twins = function(array) { // better way is to push pairs into an empty array and check that array
	
// 	for(i = 0; i < array.length; i += 2) {
// 		var a = i;
// 		var b = i + 1;
// 		var truthy = false
		
// 	    if (array[a] === array[b]) {	
// 	    	truthy = true
// 		} else {
// 			truthy = false
// 		}
// 	}
// 	console.log(truthy);
// }

// twins(['a', 'a', 'c', 'c', 'e', 'd']);


// var or = function(array) {
// 	var truthy = false;
// 	for(i = 0; i < array.length; i++) {
// 		if(array[i] === true) {
// 			truthy = true;
// 			break;
// 		} 
// 	}
// 	return truthy;
// }

// console.log(or([false, true, false, false]));




var duplicatesArray = ['a', 'b', 'd', 'c', 'f', 'c']
var uniqueArray = []
var objects = {}


var unique = function() {
	for(i = 0; i < duplicatesArray.length; i++) {
		objects[duplicatesArray[i]] = duplicatesArray[i]; // pushes key: value pair to object
		// console.log(objects)
	}
	
	for (var key in objects) {
		uniqueArray.push(key)
	}
	return uniqueArray;
	
}

console.log(unique());




