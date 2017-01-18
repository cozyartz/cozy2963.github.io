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
},
responsive_images: {
  dev: {
    options: {
      engine: 'im',
      sizes: [{
        width: 1200,
        suffix: '_large',
        quality: 50
      }]
    },

    /*
    You don't need to change this part if you don't change
    the directory structure.
    */
    files: [{
      expand: true,
      src: ['*.{gif,jpg,png}'],
      cwd: 'images_src/',
      dest: 'images/'
    }]
  }
},

/* Clear out the images directory if it exists */
clean: {
  dev: {
    src: ['images'],
  },
},

/* Generate the images directory if it is missing */
mkdir: {
  dev: {
    options: {
      create: ['images']
    },
  },
},

/* Copy the "fixed" images that don't go through processing into the images/directory */
copy: {
  dev: {
    files: [{
      expand: true,
      src: 'images_src/fixed/*.{gif,jpg,png}',
      dest: 'images/'
    }]
  },
},

imageoptim: {
myTask: {
  options: {
    jpegMini: false,
    imageAlpha: false,
    quitAfter: true
  },
  src: ['images']
}
}
});

grunt.registerTask('default', [
  'jshint',
  'htmlmin',
  'concat',
  'uglify',
  'cssmin',
  'clean',
  'mkdir',
  'copy',
  'responsive_images',
  'imageoptim'
]);

};
