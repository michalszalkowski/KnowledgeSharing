angular.module('skDocument', ['DocumentStorage'])

	.controller('DocumentCtrl', function ($scope, $http, Documents) {
		$scope.title = "Documents";

//		get data form REST version 1
//		$http.get(BACKEND_URL).then(function (response) {
//			$scope.documents = response.data;
//		});

//		get data form REST version 2
		$scope.documents = Documents.list();
	})

	.controller('DocumentDetailsCtrl', function ($scope, $http, Document, $routeParams) {
		$scope.title = "Document";

		// get data form REST version 1
		$http.get(BACKEND_URL + $routeParams.id).then(function (response) {
			$scope.document = response;
//			$scope.document = response.data;
		});

//		get data form REST version 2
//		$scope.document = Document.one({id: $routeParams.id});
	})

	.controller('DocumentPopulateCtrl', function ($http, $location) {

		for(var i = 0; i < 10; i++){

			var document = {name: 'Lorem ' + Date.now(), desc: 'Ipsum ' + Date.now()};

			$http.post('http://localhost:8080/app/', document).then(function (response) {
				console.log(response);
			});
		}

		$location.path('/documents')
	})
;