angular.module('blogSite', []);
angular.module('blogSite').controller('blogFunc', ['$scope', '$timeout', function($scope, $timeout) {
	var focusElement1 = document.getElementById("inputNumber1");
	var focusElement2 = document.getElementsByClassName("inputNumber2")[0];
	$scope.descript = "Blog o' the rando dude!";
	$scope.bday = "dumpster";
	// $scope.updateDescript = '';
	// $scope.randoDescrip = function() {
	// 	$scope.descript = $scope.updateDescript;
	// }

	$scope.showingElement1 = true;
	$scope.change1 = function() {
		$scope.showingElement1 = false;
		$timeout(function(){
			focusElement1.focus()
		})
	}

	$scope.blur1 = function() {
		$scope.showingElement1 = true;
		$scope.descript = $scope.updateDescript;
	}

	$scope.showingElement2 = true;
	$scope.change2 = function() {
		$scope.showingElement2 = false;
		$timeout(function(){
			focusElement2.focus()
		}
		, 0)
	}

	$scope.blur2 = function() {
		$scope.showingElement2 = true;
		$scope.bday = $scope.updateBday;
	}

	

	
}]);

