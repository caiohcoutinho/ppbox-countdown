var myApp = angular.module('ppbbox-countdown',[]);

myApp.controller('ppbbox-countdown-controller', ['$scope', '$interval', function($scope, $interval) {

	$scope.orderDate = new Date(2021, 8, 7, 23, 10);
	$scope.dueDate = new Date(2021, 10, 7, 23, 10);
	$scope.now = new Date();

	$scope.twoDigits = function(a){
		return (a>9?a:"0"+a)
	}

	$scope.preetyPrint = function(days, hh, mm, ss){
		return ""+days+" d "+hh+" h "+$scope.twoDigits(mm)+" min "+$scope.twoDigits(ss)+ " s";
	}

	$scope.timer = $interval(function(){
		$scope.now = new Date();
	}, 1000);

  	$scope.diffPrint = function(a, b){
  		let diff = a - b;

  		var msec = diff;
  		var days = Math.floor(msec / 1000 / 60 / 60 / 24);
  		msec -= days * 1000 * 60 * 60 * 24;
		var hh = Math.floor(msec / 1000 / 60 / 60);
		msec -= hh * 1000 * 60 * 60;
		var mm = Math.floor(msec / 1000 / 60);
		msec -= mm * 1000 * 60;
		var ss = Math.floor(msec / 1000);
		msec -= ss * 1000;

		return $scope.preetyPrint(days, hh, mm, ss);
  	}
  	
  	$scope.fromOrderDate = function(){
  		return $scope.diffPrint($scope.now, $scope.orderDate);
  	}

  	$scope.toDueDate = function(){
  		return $scope.diffPrint($scope.dueDate, $scope.now);
  	}

}]);