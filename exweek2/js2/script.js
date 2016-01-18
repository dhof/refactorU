var userword = prompt('Please enter ANY word you like, but only one!');

alert(userword.charAt(2) + userword.toLowerCase() + userword.toUpperCase() + userword.substring(1, 4))

console.log('You entered ' + userword);
console.log('The entered word length is ' + userword.length + ' characters');
console.log('charAt ' + userword.charAt(2));
console.log('The entered word in lowercase is ' + userword.toLowerCase());
console.log('The entered word in UPPERCASE is ' + userword.toUpperCase());
console.log('The word, ' + userword + ' used in a sentence');
console.log('Substring of the word ' + userword.substring(1, 4));