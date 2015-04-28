'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      sass: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['sass:dev'],
        options: {
          livereload: false
        }
      },
      styles: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['autoprefixer:dev']
      },
      js: {
        files: ['js/{,**/}*.js'],
        tasks: ['jshint']
      }
    }, //watch
    sass: {
      dev: {
        options: {
          compass: false
        },
        files: {
          'css/style.css': 'sass/style.scss'
        }
      }
    }, //sass
    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie >= 8'],
        map: true
      },
      dev: {
        files: {
          'css/style.css' : 'css/style.css'
        }
      }
    }, //autoprefixer
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['js/chardonnay-functions.js']
    } //jshint
  }); //initConfig

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
};