// console.log(_);


// ~~~~~~~~~~~~~~~~~~~~~~
// 			map
// ~~~~~~~~~~~~~~~~~~~~~~

var array = [7, 13, 11, 21, 42, 1880];

//CHALLENGE - create a NEW array where each element is twice its original value

var doubleNum = _.map(array, function(num) {
	return num * 2;
});


console.log(array);
console.log(doubleNum);


// ~~~~~~~~~~~~~~~~~~~~~~
// 			reduce
// ~~~~~~~~~~~~~~~~~~~~~~

// Start : "Gym Tan Laundry"

// Goal : "G. T. L."

var string = "Gym Tan Laundry";


var fullAcro = _.reduce(string.split(' '), function(acronymSoFar, currentWord) {
	// console.log(currentWord);
	return acronymSoFar + currentWord[0] + '. ';

}, '')

console.log(fullAcro);



// ~~~~~~~~~~~~~~~~~~~~~~
// 		find / filter
// ~~~~~~~~~~~~~~~~~~~~~~


var teddyBears = [{
	name : 'steve',
	fluffiness: 1,
	diet: 'souls',
	huggability: 5,
	ownedBySean: true,

	},
	{
	name : 'teddy ruxspin',
	fluffiness: 10,
	diet: 'batteries',
	huggability: 5,
	ownedBySean: false

	},
	{
	name : 'ted',
	fluffiness: 1,
	diet: "children\'s tears",
	huggability: 7,
	ownedBySean: true
	},
	{
	name : 'hulk',
	fluffiness: 6,
	diet: "batteries",
	huggability: 4,
	ownedBySean: false
}
]

//FIND a bear with huggability of 5 would return the first instance
//FILTER would return ALL bears with a huggability of 5

var huggyBear = _.find(teddyBears, function(bear) {
	return bear.huggability === 5;
});

console.log(huggyBear);




// ~~~~~~~~~~~~~~~~~~~~~~
// 			pluck
// ~~~~~~~~~~~~~~~~~~~~~~

var shoppingList = _.pluck(teddyBears, 'diet');
console.log(shoppingList);


// ~~~~~~~~~~~~~~~~~~~~~~
// 			uniq
// ~~~~~~~~~~~~~~~~~~~~~~


var uniqueDiets = _.uniq(_.pluck(teddyBears, 'diet'));
console.log(uniqueDiets);



// ~~~~~~~~~~~~~~~~~~~~~~
// 			chain
// ~~~~~~~~~~~~~~~~~~~~~~

var random = _.chain(teddyBears)
	.pluck('diet')
	.uniq()
	.value();

console.log(random);










