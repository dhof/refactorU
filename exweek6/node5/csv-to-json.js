var fs = require('fs');
// var arg1 = process.argv[2];
// var arg2 = process.argv[3];


var input = fs.readFileSync('./data1.csv', 'utf-8').split('\r\n').forEach(function (line) {
	// for(var i = 0; i < line.length)
	console.log("liner " + line)
	line.split(',')
	console.log("new liner " + line)
})
	


var output = fs.writeFileSync('output.json')

// var toJson = function(input, output) {
// 	var inputData = fs.readFileSync(input, 'utf-8')
// 	var parsedData = inputData
// 	var outputData = fs.writeFileSync(output)
// }




// var n = 5
// var jsond = JSON.stringify({ x : 5})
// console.log(jsond)
