module.exports = function(grunt) {
    
    grunt.initConfig ({
      jshint: {
        options: {
          "curly": true,
          "devel": true,
          "eqnull": true,
          "eqeqeq": true,
          "undef": true,
          "globals": {
            "$": false,
          },
        },
        uses_defaults: ['scripts/*.js'],
      },
      uglify: {
        target: {
          files: {
            'public/js/index.min.js': ['scripts/index.js']
          }
        }
      },
      compass: {
        public: {
          options: {
            sassDir: 'scss',
            cssDir: 'public/stylesheets'
          }
        }
      },
      watch: {
        source: {
          files: ['scss/**/*.scss'],
          tasks: ['compass']
        }
      }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'uglify']);
  };