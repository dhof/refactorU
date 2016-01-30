var d = new Date();
console.log(d.getDate());

var app = angular.module('infiniteAgenda', []);

app.controller('agendaControl', ['$scope', 'agendaFactory', function($scope, agendaFactory) {
	$scope.greeting = "welcome";
	$scope.whatDay = agendaFactory.dayObj
	console.log(whatDay)
}]) 


app.factory('agendaFactory', [function() {

		var dayObj = [{
			num: 0,
		 	name: 'Mon'
		 },
		 {
			num: 1,
		 	name: 'Tue'
		 },
		 {
			num: 2,
		 	name: 'Wed'
		 },
		 {
			num: 3,
		 	name: 'Thu'
		 },
		 {
			num: 4,
		 	name: 'Fri'
		 },
		 {
			num: 5,
		 	name: 'Sat'
		 },
		 {
			num: 6,
		 	name: 'Sun'
		 }
	]

	return {dayObj: dayObj
	}
}])
		// var setDay = '';
		// switch (day) {
		// 	case 0:
		// 		setDay = 'Mon';
		// 		break;
		// 	case 1:
		// 		setDay = 'Tue';
		// 		break;
		// 	case 2:
		// 		setDay = 'Wed';
		// 		break;
		// 	case 3:
		// 		setDay = 'Thu';
		// 		break;
		// 	case 4:
		// 		setDay = 'Fri';
		// 		break;
		// 	case 5:
		// 		setDay = 'Sat';
		// 		break;
		// 	case 6:
		// 		setDay = 'Sun';
		// 		break;
		// }



