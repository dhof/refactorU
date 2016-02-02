// var palindrome = function(string) {
// 	var reverse = [];
// 	var split = string.split('');
// 	for(var i = split.length - 1; i >= 0; i--) {
// 		reverse.push(split[i])
// 	}
// 	if(reverse.join('') === string) {
// 		return true;
// 	} else {
// 		return false;
// 	}	
// }

// console.log(palindrome("aibohphobia"));


// var dashInsert = function(num) {
// 	var newNum = "";
// 	var strung = num.toString();
// 	for(var i = 0; i < strung.length; i++) {
// 		if(strung[i] % 2 === 1 && strung[i + 1] % 2 === 1) {
// 			newNum += strung[i] + "-"
// 		} else {
// 			newNum += strung[i];
// 		}
		
		
// 	}
// 	return newNum;
// }

// console.log(dashInsert(43431463333338));




// var caesarCipher = function(string, n) {
// 	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z']
// 	var ciphered = "";

// 	if(n > alphabet.length - 1) {
// 		n = n % 26;
// 	}
		
// 		console.log(ciphered);
// 		for(var i = 0; i < string.length; i++) {
// 			if (indexOf(alphabet)
				
			
// 	}
// 	return ciphered;
// }

// console.log(caesarCipher("abcde", 2));



// var caesarCipher = function(string, n) {
// 	var ciphered = "";
// 	n = n % 26;


// 	for(i = 0; i < string.length; i++) {
// 		var tooHigh = string.charCodeAt(i) + n;

// 		if (string[i] >= String.fromCharCode(65) && string[i] <= String.fromCharCode(90) ) {
			
// 			if (tooHigh > 90) {
// 				var newOutputChar = tooHigh % 90 - 1 + 65;
// 				ciphered += String.fromCharCode(newOutputChar);

// 			} else {
// 			ciphered += String.fromCharCode(string.charCodeAt(i) + n); 
// 			}

// 		}  
// 		else if (string[i] >= String.fromCharCode(97) && string[i] <= String.fromCharCode(122)) {

// 			if (tooHigh > 122) {
// 				var newOutputChar = tooHigh % 122 - 1 + 97;
// 				ciphered += String.fromCharCode(newOutputChar);

// 			} else {
// 			ciphered += String.fromCharCode(string.charCodeAt(i) + n);
// 			}
// 		}  
// 		else {
// 			ciphered += string[i];
// 		}
		
// 	}
// 	return ciphered;
// 	console.log(String.charCodeAt(ciphered))
// }
	


// console.log(caesarCipher("Zz!abc def12Q", 99));



// the perty version ###########
 
// var caesarCipher = function(str, amount) {

//     if (amount < 0)
//         return caesarCipher(str, amount + 26);

//     var output = '';

//     for (var i = 0; i < str.length; i ++) {

//         var c = str[i];

//         if (c.match(/[a-z]/i)) {

//             var code = str.charCodeAt(i);

//             if ((code >= 65) && (code <= 90))
//                 c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

//             else if ((code >= 97) && (code <= 122))
//                 c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
//         }

//         output += c;

//     }

//     return output;

// };

// console.log(caesarCipher('abc1@ABC 4z', 80))