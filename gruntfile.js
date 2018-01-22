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
	                'dist/css/cmti.css': 'src/scss/cmti.scss'
	            }
	        }
	   },
    	cssmin: {
			options: {

			},
      		target: {
	        	files: {
	          		'dist/css/cmti.min.css': [ 'dist/css/cmti.css' ]
	        	}
      		}
    	},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'src/scss/cmti/', src: ['**'], dest: 'dist/scss/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'dist/fonts/cmgtools/', filter: 'isFile' },
					{ expand: true, cwd: 'dist/css/', src: ['*.css'], dest: 'examples/styles/', filter: 'isFile' },
					{ expand: true, cwd: 'src/fonts/', src: ['**'], dest: 'examples/fonts/cmgtools/', filter: 'isFile' }
				]
			}
		}
    });

    grunt.registerTask( 'default', [ 'sass', 'cssmin', 'copy' ] );
};
