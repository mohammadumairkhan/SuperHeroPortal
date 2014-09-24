module.exports = function (grunt) {
	
	grunt.initConfig({
		connect: {
			server:{
				options: {
	        		port: 7030,
	        		keepalive:true,
	        		hostname: 'localhost',
	        		open: true
    			}
			}
		}
	});
	grunt.registerTask('server', ['connect:server']);

	grunt.loadNpmTasks('grunt-contrib-connect');
}