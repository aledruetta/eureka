module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
            },
            target1: ['Gruntfile.js', 'src/js/*.js'],
        },

        uglify: {
            target1: {
                src: 'src/js/builder.js',
                dest: 'build/builder.min.js'
            },
            target2: {
                src: 'src/js/custom.js',
                dest: 'build/custom.min.js',
            },
        },

        concat: {
            // 2. Configuration for concatinating files goes here.
            target1: {
                files: {
                    'build/scripts.js': ['libs/jquery-*.min.js', 'libs/bs/js/bootstrap.min.js', 'build/*.min.js'],
                },
            },
            target2: {
                files: {
                    'build/style.css': ['libs/bs/css/bootstrap.min.css', 'src/css/*.css'],
                },
            },
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['jshint', 'uglify', 'concat']);

};
