module.exports = function( grunt ) {

	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'dist/css/breeze-icons-core.css': 'src/scss/breeze-icons-core.scss',
					'dist/css/breeze-icons-currency.css': 'src/scss/breeze-icons-currency.scss'
	            }
	        }
	   },
    	cssmin: {
			options: {

			},
      		target: {
	        	files: {
	          		'dist/css/breeze-icons-core.min.css': [ 'dist/css/breeze-icons-core.css' ],
					'dist/css/breeze-icons-currency.min.css': [ 'dist/css/breeze-icons-currency.css' ]
	        	}
      		}
    	},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'src/scss/breeze-icons/', src: ['**'], dest: 'dist/scss/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/core', src: ['**'], dest: 'dist/fonts/breeze/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/currency', src: ['**'], dest: 'dist/fonts/breeze/', filter: 'isFile' },
					{ expand: true, cwd: 'dist/css/', src: ['*.css'], dest: 'examples/styles/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/core', src: ['**'], dest: 'examples/fonts/breeze/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/currency', src: ['**'], dest: 'examples/fonts/breeze/', filter: 'isFile' },
					{ expand: true, cwd: 'dist/css/', src: ['*.css'], dest: '../breeze/examples/styles/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/core', src: ['**'], dest: '../breeze/examples/fonts/breeze/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/currency', src: ['**'], dest: '../breeze/examples/fonts/breeze/', filter: 'isFile' }
				]
			}
		}
    });

    grunt.registerTask( 'default', [ 'sass', 'cssmin', 'copy' ] );
};
