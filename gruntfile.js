module.exports = function( grunt ) {

	grunt.loadNpmTasks( 'grunt-sass' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'dist/styles/cmti.css': 'scss/cmti.scss'
	            }
	        }
	   },
    	cssmin: {
			options: {

			},
      		target: {
	        	files: {
	          		'dist/styles/cmti.min.css': [ 'dist/styles/cmti.css' ]
	        	}
      		}
    	}
    });

    grunt.registerTask( 'default', [ 'sass', 'cssmin' ] );
};