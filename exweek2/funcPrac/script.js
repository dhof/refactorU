var tripleFive = function() {
	for (i = 1; i <= 3; i++ ) {
		console.log("Five!");
	}
};

tripleFive();

var lastLetter = function(string) {
	var stringLength = string.length;
	console.log(string.charAt(stringLength - 1));

};

lastLetter("monkeys");


var square = function (x) {
	squared = x * x;
	console.log(squared);
};

square(4);

var negate = function(x) {
	negated = x * -1;
	console.log(negated);
};

negate(-5);

var toArray = function(x, y, z) {
	var string = x, y, z;
	var array = string.split(',');
	console.log(array);
};

toArray('hello, banana, monkeys');

var startsWithA = function(string) {
	if (string[0] === 'a' || string[0] === 'A') {
		return true;
	} else {
		return false;
	};
};

console.log(startsWithA('animal protein'));

var excite = function(string) {
	excited = string + '!!!';
	console.log(excited);
}; 

excite('hell yeah');

var sun = function(string) {
	if (string.indexOf("sun") >= 0) {
		return true;
	} else {
		return false;
};
};

console.log(sun('station of sun'));

var tiny = function(x) {
	if (x > 0 && x < 1) {
		return true;
	} else {
		return false;
	};
};

console.log(tiny(.2));

var getSeconds = function(string) {
	secondsArray = string.split(':');
	minutes = secondsArray[0] * 60;
	totalSeconds = minutes + Number(secondsArray[1]);
	console.log(totalSeconds);
};

getSeconds('03:20');









