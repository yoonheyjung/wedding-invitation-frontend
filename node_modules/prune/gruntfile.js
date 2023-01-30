/*jslint node: true, nomen: true */
'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jslint: {
            all: {
                src: [
                    './**/*.js',
                    './package.json'
                ],
                exclude: [
                    './node_modules/**/*.js',
                    './build/**/*.js'
                ],
                options: {  }
            }
        },
        jasmine: {
            browserGlobal: {
                src: ['./build/prune.js'],
                options: {
                    specs: './spec/**/*.spec.js',
                    helpers : './spec/helpers/*.js'
                }
            },
            browserAMD: {
                src: ['./build/prune.js'],
                options: {
                    specs: './spec/**/*.spec.js',
                    helpers : './spec/helpers/*.js',
                    template: require('grunt-template-jasmine-requirejs')
                }
            }
        },
        jasmine_node: {
            specNameMatcher: "spec",
            projectRoot: ".",
            useHelpers: true
        },
        browserify: {
            all: {
                src: './src/prune.js',
                dest: './build/prune.js',
                options: {
                    standalone: "prune"
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-jasmine-node');
    grunt.loadNpmTasks('grunt-jslint');

    return grunt.registerTask('default', ['jslint', 'browserify', 'jasmine_node', 'jasmine:browserGlobal', 'jasmine:browserAMD']);
};