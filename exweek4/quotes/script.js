var app = angular.module('inspirationalQuotes', []);

app.controller('quotesControl', ['$scope', function($scope) {
	var quoteTracker = 1;
	$scope.quotes = [];
	$scope.authorName = "";
	$scope.quoteText = "";
	$scope.removeTruthy = false;


	$scope.QuoteCreate = function(author, text, rating) {
		this.quoteId = quoteTracker;
		this.author = author,
		this.text = text,
		this.rating = null;
		quoteTracker++;
		$scope.quotes.push(this);
		$scope.newQuote = {};
	}

	$scope.submitQuote = function() {
		$scope.removeTruthy = true;
	}

	$scope.removeLast = function() {
		$scope.quotes.pop();
		console.log($scope.quotes);
		$scope.removeTruthy = false;
	}


	var kanyeQuote1 = new $scope.QuoteCreate (
		"Kanye West",
		"I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle."
	)

	var anonQuote1 = new $scope.QuoteCreate (
		"Anonymous",
		"Sometimes when I close my eyes, I can't see."
	)

	var kintzQuote1 = new $scope.QuoteCreate (
		"Jarod Kintz",
		"I want to write my own eulogy, and I want to write it in Latin. It seems only fitting to read a dead language at my funeral."
	)


}])




