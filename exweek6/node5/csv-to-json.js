var fs = require('fs');
var arg1 = process.argv[2];
var arg2 = process.argv[3];


var input = fs.readFileSync('./data1.csv', 'utf-8').split('\n').forEach(function (line) { 
	// split(indexOf) 
	console.log(line)
	console.log(input)
	console.log(typeof(input))
})
var output = fs.writeFileSync('output.json')

// var toJson = function(input, output) {
// 	var inputData = fs.readFileSync(input, 'utf-8')
// 	var parsedData = inputData
// 	var outputData = fs.writeFileSync(output)
// }


// toJson(arg1, arg2);