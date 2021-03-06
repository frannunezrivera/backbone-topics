// Configuration for Concurrent task(s)
// Runs tasks in parallel to speed up the build process
'use strict';

var taskConfig = function(grunt) {

  grunt.config.set('concurrent', {
    images: [
      'imagemin:dist',
    ],
    compile: [
      'less:dist',
      'jst:dist',
      'requirejs'
    ],
    docs: [
      'jsdoc:dist',
      'styleguide:dist'
    ]
  });

};

module.exports = taskConfig;
