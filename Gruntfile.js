module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            target: {
                options: {
                    sourceMap: true,
                },
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: '*.js',
                    dest: 'tmp',
                    ext: '.min.js'
                }]
            }
        },

        cssmin: {
            options: {
                sourceMap: true,
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: '*.css',
                    dest: 'tmp',
                    ext: '.min.css'
                }]
            }
        },

        concat: {
            target: {
                options: {
                    sourceMap: true,
                },
                files: {
                    'build/production.min.js': 'tmp/*.min.js',
                    'build/production.min.css': 'tmp/*.min.css',
                }
            }
        },

        htmlmin: {
            target: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                },
                files: {
                    'index.html': 'src/html/index.html',
                }
            }
        },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
        'uglify',
        'cssmin',
        'concat',
        'htmlmin',
    ]);

};
