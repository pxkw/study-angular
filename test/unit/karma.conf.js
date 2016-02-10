module.exports = function(config) {
  config.set({
    basePath: '../../',
    frameworks: ['jasmine'],
    preprocessors: {
      'view/*.html': ['ng-html2js']
    },
    files: [ 
      'public/bower_components/jquery/dist/jquery.js',
      'public/bower_components/angular/angular.min.js',
      'public/bower_components/angular-ui-router/release/angular-ui-router.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/app.js',
      'public/view/*.html',
      'test/unit/**/*_spec.js',
      'test/unit/helper/*.js'
    ],
    exclude: [ '**/*.swp' ],
    preprocessors: {
      'public/view/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: "public/",
      moduleName: 'templates'
    },
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
