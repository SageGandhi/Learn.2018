module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      files: ['public/**/*.js', 'routes/**/*.js']
    },
    watch: {
      files: ['public/**/*.js', 'routes/**/*.js'],
      tasks: ['jshint']
    }
  });
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
};
