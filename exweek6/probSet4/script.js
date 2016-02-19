var addNumbers = function(string) {
	var output = 0;
	var tempNum = '';
	var numArray = [];
	split = string.split('');
	for(var i = 0; i < split.length; i++) {
		if(isNaN(split[i]) === false && isNaN(split[i+1]) === false) {
			tempNum += split[i];
			tempNum += split[i+1];
			numArray.push(tempNum);
			tempNum = '';
			i++;
		}
		else if (isNaN(split[i]) === false) {
			numArray.push(split[i])
		}
	}
	for(var f = 0; f < numArray.length; f++) {
		output = output + Number(numArray[f]);
	}
	console.log("number array " + numArray)
	console.log("temp number " + tempNum)
	console.log("output is " + output)
}

addNumbers('35hello5')

