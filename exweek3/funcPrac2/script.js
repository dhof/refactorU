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

var negativeIndex = function(array, position) {
	return array[array.length + position];
}

console.log(negativeIndex(['dog','cat','bat','tiger'], -1));