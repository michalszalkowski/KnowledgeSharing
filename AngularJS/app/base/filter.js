angular.module('sk')

	.filter('doSomething', function (catFactory) {
		return function (input, name1, name2) {
			return input + " " + name1+ " " + name2 + " " + catFactory.getCats();
		};
	});