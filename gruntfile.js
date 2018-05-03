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
	                'dist/css/cmti-core.css': 'src/scss/cmti-core.scss',
					'dist/css/cmti-currency.css': 'src/scss/cmti-currency.scss'
	            }
	        }
	   },
    	cssmin: {
			options: {

			},
      		target: {
	        	files: {
	          		'dist/css/cmti-core.min.css': [ 'dist/css/cmti-core.css' ],
					'dist/css/cmti-currency.min.css': [ 'dist/css/cmti-currency.css' ]
	        	}
      		}
    	},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'src/scss/cmti/', src: ['**'], dest: 'dist/scss/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/core', src: ['**'], dest: 'dist/fonts/cmgtools/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/currency', src: ['**'], dest: 'dist/fonts/cmgtools/', filter: 'isFile' },
					{ expand: true, cwd: 'dist/css/', src: ['*.css'], dest: 'examples/styles/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/core', src: ['**'], dest: 'examples/fonts/cmgtools/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/currency', src: ['**'], dest: 'examples/fonts/cmgtools/', filter: 'isFile' }
				]
			}
		}
    });

    grunt.registerTask( 'default', [ 'sass', 'cssmin', 'copy' ] );
};
