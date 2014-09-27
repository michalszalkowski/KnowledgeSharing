angular.module('sk')

	.controller('HomeCtrl', function ($scope, catFactory, dogService) {
		$scope.title = "Home";
		$scope.cats = catFactory.getCats();
		$scope.dogs = dogService.getDogs();
	})

	.controller('AboutCtrl', function ($scope) {
		$scope.title = "About";
	})
;