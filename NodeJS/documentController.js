var express = require('express');

var DocumentStorage = require('./documentStorage');

module.exports.init = function () {

	var routerApi = express.Router();

	routerApi.route('/').get(function (req, res) {
		res.json(DocumentStorage.all());
	});

	routerApi.route('/:id').get(function (req, res) {
		res.json(DocumentStorage.one(req.params.id));
	});

	routerApi.route('/').post(function (req, res) {
		var id = DocumentStorage.add(req.body);
		res.json({id: id});
	});

	routerApi.route('/:id').put(function (req, res) {
		res.json(DocumentStorage.update(req.params.id, req.body));
	});

	routerApi.route('/:id').delete(function (req, res) {
		res.json(DocumentStorage.remove(req.params.id));
	});

	return routerApi;
};