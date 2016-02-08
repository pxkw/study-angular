module.exports = function(config) {
  config.set({
    basePath: '../../',
    frameworks: ['jasmine'],
    files: [ 
      'public/bower_components/jquery/dist/jquery.min.js',
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/angular-ui-router/release/angular-ui-router.min.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/app.js',
      'public/view/*.html',
      'test/unit/**/*_spec.js'
    ],
    exclude: [ '**/*.swp' ],
    preprocessors: { }, 
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
}
