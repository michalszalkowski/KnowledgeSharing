var storage = {};

module.exports.all = function () {
	return storage;
};

module.exports.add = function (document) {
	var id = Date.now();
	storage[id] = document;
	return id;
};

module.exports.one = function (id) {
	return storage[id];
};

module.exports.update = function (id, document) {
	storage[id] = document;
};

module.exports.remove = function (id) {
	delete storage[id];
};