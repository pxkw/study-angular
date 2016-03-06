module.exports = function(config) {
  config.set({
    basePath: process.env.PJ_HOME,
    frameworks: ['jasmine'],
    preprocessors: {
      'view/*.html': ['ng-html2js']
    },
    files: [ 
      'src/public/lib/jquery/dist/jquery.js',
      'src/public/lib/angular/angular.min.js',
      'src/public/lib/angular-ui-router/release/angular-ui-router.js',
      'src/public/lib/angular-mocks/angular-mocks.js',
      'src/public/app.js',
      'src/public/view/*.html',
      'test/unit/front/**/*_spec.js',
      'test/unit/front/helper/*.js'
    ],
    exclude: [ '**/*.swp' ],
    preprocessors: {
      'src/public/view/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: "src/public/",
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
