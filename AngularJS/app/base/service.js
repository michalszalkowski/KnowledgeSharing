angular.module('sk')

	.factory('catFactory', function () {

		var getCats = function () {
			return [
				{},
				{}
			];
		};

		return {
			getCats: getCats
		};
	})

	.service('dogService', function () {

		this.getDogs = function () {
			return [
				{},
				{}
			];
		};

	})

;