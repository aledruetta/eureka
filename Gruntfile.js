module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        image_resize: {
            options: {
                upscale: true,
                crop: true,
                gravity: 'Center',
                width: 856,
                height: 535,
            },
            images: {
                files: [{
                    expand: true,
                    cwd: 'src/images/gallery',
                    src: ['*.{jpg,jpeg,png}'],
                    dest: 'tmp',
                }]
            }
        },

        responsive_images: {
            options: {
                sizes: [{
                    name: '1x',
                    width: 428,
                    quality: 80
                }, {
                    name: '2x',
                    width: 856,
                    quality: 80
                }]
            },
            images: {
                files: [{
                    expand: true,
                    cwd: 'tmp',
                    src: ['*.{jpg,jpeg,png}'],
                    dest: 'build/images/gallery',
                }]
            }
        },

        imagemin: {
            options: {
                progressive: true,
            },
            images: {
                files: [{
                    expand: true,
                    cwd: 'build/images/gallery',
                    src: ['*.jpg', '*.jpeg'],
                    dest: 'build/images/gallery',
                    ext: '.jpg',
                }, {
                    expand: true,
                    cwd: 'src/images/cover',
                    src: ['*.jpg', '*.jpeg'],
                    dest: 'build/images/cover',
                    ext: '.jpg',
                }]
            }
        },

        clean: {
            tmp: ['tmp/'],
            build: ['build/index.html', 'index.html', 'tmp/'],
            images: ['build/images/', 'tmp/'],
        },

        processhtml: {
            build: {
                files: [{
                    src: ['src/index.html'],
                    dest: 'build/index.html',
                }],
            },
            devel: {
                files: [{
                    src: ['src/index.html'],
                    dest: 'index.html',
                }],
            },
        },

        inline: {
            options: {
                cssmin: true,
                uglify: true,
            },
            build: {
                files: [{
                    src: ['build/index.html'],
                }]
            }
        },

        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,
            },
            build: {
                files: [{
                    src: ['build/index.html'],
                    dest: 'build/index.html',
                }]
            }
        },
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', []);
    grunt.registerTask('build', [
        'clean:build',
        'processhtml:build',
        'processhtml:devel',
        'inline:build',
        'htmlmin:build',
    ]);
    grunt.registerTask('images', [
        'clean:images',
        'image_resize:images',
        'responsive_images:images',
        'imagemin:images',
        'clean:tmp',
    ]);

};
