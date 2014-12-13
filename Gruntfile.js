module.exports = function(grunt) {
	var rewrite = require('connect-modrewrite');
	var mountFolder = function (connect, dir) {
		var mountPath = require('path').resolve(dir);
		console.log('Mounting folder: ' + mountPath);
		return connect.static(mountPath);
	};

	grunt.initConfig({
		meta: {
			src: 'src',
			dist: 'dist'
		},
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				reporterOutput: 'jshint.log',
				jshintrc: '.jshintrc'
			},
			all: ['<%= meta.src %>/js/**/*.js']
		},
		copy: {
			root: {
				expand: true,
				cwd: '<%= meta.src %>',
				src: ['*.*'],
				dest: '<%= meta.dist %>'
			},
			css: {
				expand: true,
				cwd: '<%= meta.src %>',
				src: ['css/**/*'],
				dest: '<%= meta.dist %>'
			},
			js: {
				expand: true,
				cwd: '<%= meta.src %>/',
				src: ['js/**/*'],
				dest: '<%= meta.dist %>'
			},
			imgs: {
				expand: true,
				cwd: '<%= meta.src %>/',
				src: ['images/**/*'],
				dest: '<%= meta.dist %>'
			}
		},
		watch: {
			gruntfile: {
				files: ['Gruntfile.js'],
				tasks: ['build'],
				options: {
					livereload: true
				}
			},
			root: {
				files: ['<%= meta.src %>/*.*'],
				tasks: ['copy:root'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['<%= meta.src %>/css/**/*'],
				tasks: ['copy:css'],
				options: {
					livereload: true
				}
			},
			js: {
				files: ['<%= meta.src %>/js/**/*'],
				tasks: ['copy:js'],
				options: {
					livereload: true
				}
			},
			imgs: {
				files: ['<%= meta.src %>/images/**/*'],
				tasks: ['copy:imgs'],
				options: {
					livereload: true
				}
			}
		},
		connect: {
	    server: {
        options: {
          hostname: '*',
          port: '8081',
          // keepalive: true,
          middleware: function(connect) {
              return [
              	rewrite(['!\\.html|\\.ico|\\.js|\\.css|\\.svg|\\.jp(e?)g|\\.png|\\.gif$ /index.html']),
              	mountFolder(connect, './dist/')
              ];
          }
        }
	    }
		},
		clean: {
			build: ['dist']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// grunt.registerTask('build', ['jshint', 'clean', 'copy'] );
	grunt.registerTask('build', ['clean', 'copy'] );
	grunt.registerTask('serve', ['connect:server', 'watch'] );
};
