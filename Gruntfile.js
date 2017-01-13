module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      options: {
        manage: false
      },
      my_target: {
          files: {
            'js_com/main.min.js': ['js/*.js']
          }
      }
    }

    // cssmin: {
    //   my_target: {
    //       files: [{
    //         expand: true,
    //         cwd: 'css/',
    //         src: ['*css', '!*.min.css'],
    //         dest: 'css/',
    //         ext: '.min.css'
    //       }]
    //   }
    // }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


};
