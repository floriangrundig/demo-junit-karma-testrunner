module.exports = function (config) {
  config.set({
    basePath: '../../..',

    files: [
      'main/webapp/lib/angular/angular.js',
      'main/webapp/lib/angular/angular-*.js',
      'test/javascript/lib/angular/angular-mocks.js',
      'main/webapp/js/**/*.js',
      'test/javascript/unit/**/*.js'
    ],

    frameworks: ['jasmine'],

    autoWatch: true,

    browsers: ['Chrome'],

    junitReporter: {
      outputFile: '../target/test_out/unit.xml',
      suite: 'unit'
    }
  });
};
