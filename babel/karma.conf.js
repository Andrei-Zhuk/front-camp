// Karma configuration
// Generated on Wed Jun 01 2016 17:37:40 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './public/app.js',
      './tests/app.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      './public/app.js': ['coverage']
    },
    coverageReporter: {
      type : 'html',
      dir : './coverage/'
    },
    reporters: ['spec', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
