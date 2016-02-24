angular.module('JobApp', ['ngRoute'])

angular.module('JobApp')
	.controller('homeController', ['$scope', '$http', function($scope, $http){
		

		$scope.createApplicant = function(){
			$http.post('/api/applicants', $scope.newApplicant)
				.then(function() {
					window.location = '/applicants'

					// DONT NEED this because the http.get is used on a different page. This would be for autopopulating a single page
					// $scope.applicantData = $scope.applicantData || []
					// $scope.applicantData.push(returnData.data)
					// $scope.newApplicant = {}
				})
		}
	}]);


angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){

		// COULD SET this to a variable and then remove the applicants from the db and the variable. Then another $http.get wouldn't be necessary
		$http.get('/api/applicants')
			.then(function(returnData) {
				console.log("getted data ", returnData.data)
				$scope.applicantData = returnData.data
			})


		
		$scope.removeApplicant = function(applicantId) {
			$http.post('/api/applicants/remove', {"appId" : applicantId})
				.then(function(returnedData) {
					$scope.applicantRemoved = returnedData.data.name;
					$http.get('/api/applicants')
						.then(function(returnData) {
						$scope.applicantData = returnData.data
				})
			})
		}

	}]);


angular.module('JobApp')
	.controller('profileController', ['$scope', '$http', '$route', '$routeParams', '$location', function($scope, $http, $route, $routeParams, $location) {


		
		// $scope.showme = console.log($route.params)
		$http.get('/applicants/:userid')
			.then(function(returnedData) {
				window.location = '/applicants'
				$scope.params = $route.params
				$scope.showme = console.log($routeParams = {user:'56cd069fe6f8c6c82e82344a'})
			})

	}]);
