var BACKEND_URL = "http://localhost:8080/app/";

angular.module('sk',
	[
		'ngRoute',
		'skDocument'
	])

	.config(["$routeProvider", function ($routeProvider) {

		$routeProvider.
			when('/dashboard', {
				templateUrl: './app/base/view/home.html',
				controller: 'HomeCtrl'
			}).
			when('/about', {
				templateUrl: './app/base/view/about.html',
				controller: 'AboutCtrl'
			}).
			when('/documents', {
				templateUrl: './app/components/document/view/list.html',
				controller: 'DocumentCtrl'
			}).
			when('/documentsPopulate', {
				template:'populate',
				controller: 'DocumentPopulateCtrl'
			}).
			when('/document/:id', {
				templateUrl: './app/components/document/view/details.html',
				controller: 'DocumentDetailsCtrl'
			}).
			otherwise({
				redirectTo: '/dashboard'
			});
	}]);
