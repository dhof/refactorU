angular.module('blogSite', []);
angular.module('blogSite').controller('blogFunc', ['$scope', function($scope) {
	$scope.showingElement1 = true;
	$scope.change1 = function() {
		$scope.showingElement1 = false;
	}
	$scope.showingElement2 = true;
	$scope.change2 = function() {
		$scope.showingElement2 = false;
	}
	
	var Devon = document.getElementById("devon")

	$timeout(function(){
	Devon.focus()
})
}]);

