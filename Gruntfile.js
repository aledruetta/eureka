module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                sourceMap: true,
            },
            deploy: {
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
            deploy: {
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
            options: {
                sourceMap: true,
            },
            deploy: {
                files: [{
                        src: 'tmp/*.min.js',
                        dest: 'build/js/production.min.js'
                    },
                    {
                        src: 'tmp/*.min.css',
                        dest: 'build/css/production.min.css'
                    },
                ]
            }
        },

        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
            },
            deploy: {
                files: [{
                    src: 'index.html',
                    dest: 'index.html'
                }]
            }
        },

        responsive_images: {
            options: {
                sizes: [{
                        name: '1x',
                        width: 428,
                        quality: 80
                    },
                    {
                        name: '2x',
                        width: 856,
                        quality: 80
                    }
                ]
            },
            devel: {
                files: [{
                    expand: true,
                    cwd: 'src/images/gallery',
                    src: ['*.{jpg,jpeg,png}'],
                    dest: 'build/images/gallery',
                }]
            }
        },

        imagemin: {
            options: {
                progressive: true,
            },
            devel: {
                files: [{
                        expand: true,
                        cwd: 'build/images/gallery',
                        src: ['*.jpg', '*.jpeg'],
                        dest: 'build/images/gallery',
                        ext: '.jpg',
                    },
                    {
                        expand: true,
                        cwd: 'src/images/cover',
                        src: ['*.jpg', '*.jpeg'],
                        dest: 'build/images/cover',
                        ext: '.jpg',
                    }
                ]
            }
        },

        clean: {
            tmp: ['tmp/*'],
        },

        processhtml: {
            devel: {
                files: [{
                    src: 'src/html/index.html',
                    dest: 'index.html'
                }]
            },
            deploy: {
                files: [{
                    src: 'src/html/index.html',
                    dest: 'index.html'
                }]
            }
        },
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', []);
    grunt.registerTask('devel', [
        'responsive_images:devel',
        'imagemin:devel',
        'processhtml:devel',
    ]);
    grunt.registerTask('deploy', [
        'uglify:deploy',
        'cssmin:deploy',
        'concat:deploy',
        'processhtml:deploy',
        'htmlmin:deploy',
        'clean',
    ]);

};
