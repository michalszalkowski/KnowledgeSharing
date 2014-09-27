$http.get('http://localhost:8080/app/').then(function (response) {
	console.log("GET", response);
});

$http.post('http://localhost:8080/app/', {name: 'Lorem', desc: 'Ipsum1'}).then(function (response) {
	console.log("POST", response);
});

$http.get('http://localhost:8080/app/1411677494101').then(function (response) {
	console.log("GET One", response);
});


$http.delete('http://localhost:8080/app/1411677495007').then(function (response) {
	console.log("DELETE", response);
});

$http.put('http://localhost:8080/app/1411677681996', {name: 'qweqfsdfsdfsdwe', desc: 'qweqwe'}).then(function (response) {
	console.log("PUT", response);
});