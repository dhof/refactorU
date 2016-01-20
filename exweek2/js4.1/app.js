var app = angular.module('angularApp', []);

app.controller('consoleOutput', ['$scope', '$log', function($scope, $log) {
	// var hideElement = true;
	$scope.$log = $log;
	$scope.message = 'I will be outputted!';
	$scope.h1 = "I'm an h1 tag!";
	$scope.excitement = "!";
	$scope.hideElement = false;
	$scope.noEscape = function() {
        var response = confirm("Do you really want to leave me?");
        if (response == false) {
            event.preventDefault();
            $scope.hideElement = true;
        } else {
            return false;
        }

	};
}]);	

// app.controller('modalPop', ['$scope', '$window', function($scope, $window) {
// 	$scope.openWindow = function() {
// 		$window.open('popup.html', 'popup-tab', 'width=500,height=400');
// 	}
// }]);

app.controller('modalPop', ['$scope', function($scope) {
	$scope.openModal = function() {
		$scope.showModal = true;
	};

	$scope.cancel = function() {
		$scope.showModal = false;
	};
}]);



	
	
