'use strict';

module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.read('package.json'),

		jshint: {
			options: {
			},
			files: [
				'app/base/**/*.js',
				'app/components/**/*.js'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};