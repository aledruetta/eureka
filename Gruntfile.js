module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
            },
            target1: ['Gruntfile.js', 'js/*.js'],
        },

        concat: {
            // 2. Configuration for concatinating files goes here.
            js: {
                src: [
                    'lib/jquery-*.min.js',
                    'lib/bs/bootstrap.min.js',
                    'js/*.js',
                ],
                dest: 'js/build/minified.js',
            },
            css: {
                src: [
                    'lib/bs/css/bootstrap.min.css',
                    'css/*.css',
                ],
                dest: 'css/build/minified.css',
            },
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['jshint', 'concat']);

};
