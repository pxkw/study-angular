'use strict';

var gulp = require('gulp');
var karma = require('karma');

gulp.task('unit', function(done) {
  new karma.Server({
    configFile: __dirname + '/test/unit/karma.conf.js',
    singleRun: true
  }).start(done);
});

