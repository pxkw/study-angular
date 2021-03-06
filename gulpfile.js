'use strict';

process.env.PJ_HOME = __dirname;
process.env.PJ_PORT = 8080;

const PJ_HOME = process.env.PJ_HOME;
const gulp = require('gulp');
const karma = require('karma');
const protractor = require('gulp-protractor').protractor;
const runSequence = require('run-sequence');
const jasmine = require('gulp-jasmine');
const server = require(PJ_HOME+'/src/server/server.js');

gulp.task('start', done => server.start(done) );
gulp.task('stop', done => server.stop(done) );

gulp.task('test', done => runSequence('test:e2e', 'test:unit', done) );

gulp.task('test:unit', ['test:unit:front', 'test:unit:server']);

gulp.task('test:unit:front', done => {
  new karma.Server({
    configFile: PJ_HOME+'/test/unit/front/karma.conf.js',
    singleRun: true
  }).start(done);
});

gulp.task('test:unit:server', (done) => {
  gulp.src(PJ_HOME+'/test/unit/server/*-spec.js')
   .pipe(jasmine())
   .on('end', done);
});

gulp.task('test:e2e', ['start'], done => {
  const tearDown = () => runSequence('stop', done);
  gulp.src([])
    .pipe(protractor({
      configFile: PJ_HOME+'/test/e2e/protractor.conf.js'
    }))
  .on('end', tearDown)
  .on('error', tearDown);
});

