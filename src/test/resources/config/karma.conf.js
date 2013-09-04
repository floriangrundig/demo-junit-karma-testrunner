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
        reporters: ['progress', 'junit'],

        autoWatch: false,
        singleRun: true,

        browsers: ['Chrome'],

        junitReporter: {
            outputFile: '../target/test_out/unit.xml',
            suite: 'unit'
        },
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-junit-reporter'
        ]


    });
};
