var app = angular.module('inspirationalQuotes', []);

app.controller('quotesControl', ['$scope', function($scope) {
	$scope.quotes = [];
	$scope.authorName = "";
	$scope.quoteText = "";


	$scope.quoteCreate = function(author, text, rating) {
		this.author = author,
		this.text = text,
		this.rating = null;
		$scope.quotes.push(this);
	}

	var firstQuote = new $scope.quote (
	"devon",
	"Lorem ipsum dolor sit amet."
	)

	var secondQuote = new $scope.quote (
	"shten",
	"bacon something something yum."
	)

	var thirdQuote = new $scope.quote (
	"the internet",
	"How I mine for fish."
	)



}])




