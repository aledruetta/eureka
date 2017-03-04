module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        responsive_images: {
            options: {
                aspectRatio: false,
                gravity: 'Center',
                upscale: false,
                density: 72,
                sizes: [{
                    name: '1x',
                    width: 428,
                    height: 267.5,
                    quality: 80
                }, {
                    name: '2x',
                    width: 856,
                    height: 535,
                    quality: 80
                }]
            },
            images: {
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
            gallery: {
                options: {
                    optimization: 3,
                },
                files: [{
                    expand: true,
                    cwd: 'build/images/gallery',
                    src: ['*.jpg', '*.jpeg'],
                    dest: 'build/images/gallery',
                    ext: '.jpg',
                }],
            },
            cover: {
                options: {
                    optimization: 3,
                },
                files: [{
                    expand: true,
                    cwd: 'src/images/cover',
                    src: ['*.jpg', '*.jpeg'],
                    dest: 'build/images/cover',
                    ext: '.jpg',
                }]
            }
        },

        processhtml: {
            dist: {
                files: [{
                    src: ['src/index.html'],
                    dest: 'build/index.html',
                }],
            },
            devel: {
                files: [{
                    src: ['src/index.html'],
                    dest: 'build/index.html',
                }],
            },
        },

        inline: {
            options: {
                cssmin: true,
                uglify: true,
            },
            dist: {
                files: [{
                    src: ['build/index.html'],
                    dest: 'build/index.html',
                }]
            }
        },

        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
            },
            dist: {
                files: [{
                    src: ['build/index.html'],
                    dest: 'build/index.html',
                }]
            }
        },

        clean: {
            index: ['build/index.html'],
            images: ['build/images/'],
        },
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', []);
    grunt.registerTask('dist', [
        'clean:index',
        'processhtml:dist',
        'inline:dist',
        'htmlmin:dist',
    ]);
    grunt.registerTask('devel', [
        'clean:index',
        'processhtml:devel',
    ]);
    grunt.registerTask('images', [
        'clean:images',
        'responsive_images:images',
        'imagemin:cover',
        'imagemin:gallery',
    ]);

};
