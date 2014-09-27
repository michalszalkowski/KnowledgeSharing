angular.module('DocumentStorage', ['ngResource'])

	.factory('Documents', function ($resource) {
		return $resource(BACKEND_URL, {}, {
			list: { method: 'GET', isArray: false },
			create: { method: 'POST' }
		})
	})

	.factory('Document', function ($resource) {
		return $resource(BACKEND_URL + ':id', {}, {
			one: { method: 'GET', params: {id: '@id'} },
			update: { method: 'PUT', params: {id: '@id'} },
			delete: { method: 'DELETE', params: {id: '@id'} }
		})
	})
;