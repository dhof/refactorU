angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', '$http', function($scope, $http){
		

		$scope.createApplicant = function(){
			$http.post('/api/applicants', $scope.newApplicant)
				.then(function() {
					window.location = "/applicants"

					// DONT NEED this because the http.get is used on a different page 
					// $scope.applicantData = $scope.applicantData || []
					// $scope.applicantData.push(returnData.data)
					// $scope.newApplicant = {}
				})
		}

}]);


angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){

		$http.get('/api/applicants')
			.then(function(returnData) {
				console.log("getted data ", returnData.data)
				$scope.applicantData = returnData.data
			})


		$scope.applicantName = '';	
		$scope.removeApplicant = function(applicantId) {
			$http.post('/api/applicants/remove', {"appId" : applicantId})
				.then(function(returnedData) {
					$scope.applicantName = returnedData.data.name
				})

			$http.get('/api/applicants')
				.then(function(returnData) {
					$scope.applicantData = returnData.data
			})
		}

	}]);
