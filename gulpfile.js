'use strict';

const gulp = require('gulp');
const karma = require('karma');
const protractor = require('gulp-protractor').protractor;
const runSequence = require('run-sequence');
const app = require('./src/server/server.js');


gulp.task('start', done => app.start(done) );
gulp.task('stop', done => app.stop(done) );

gulp.task('test', done => runSequence('test:e2e', 'test:unit', done) );

gulp.task('test:unit', done => {
  new karma.Server({
    configFile: __dirname + '/test/unit/karma.conf.js',
    singleRun: true
  }).start(done);
});

gulp.task('test:e2e', ['start'], done => {
  const tearDown = () => runSequence('stop', done);
  gulp.src([])
    .pipe(protractor({
      configFile: "test/e2e/protractor.conf.js"
    }))
  .on('end', tearDown)
  .on('error', tearDown);
});

