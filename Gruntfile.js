module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'dist/index.html': 'index.html',     // 'destination': 'source'
      }
    }
  },
  concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/helper.js', 'js/revise.js', 'js/app.js'],
      dest: 'dest/js/built.js',
    }
  },
  jshint: {
      all: ['Gruntfile.js','js/*.js']
  },
  uglify: {
    my_target: {
      files: {
        'dest/js/output.min.js': ['dest/js/built.js']
      }
    }
  },
  cssmin: {
    my_target: {
      files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dest/css/',
          ext: '.min.css'


    }]
  }
}
});

grunt.registerTask('default', [
  'jshint',
  'htmlmin',
  'concat',
  'uglify',
  'cssmin'
]);

};