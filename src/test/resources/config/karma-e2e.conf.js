module.exports = function (config) {
    config.set({
        basePath: '../../..',

        files: [
            'test/javascript/e2e/**/*.js'
        ],

        frameworks: ['ng-scenario'],

        autoWatch: false,

        browsers: ['Chrome'],
        reporters: ['junit','remote'],


        singleRun: true,

        proxies: {
            '/': 'http://localhost:8080/'
        },

        urlRoot: '/__karma/',

        junitReporter: {
            outputFile: 'test_out/e2e.xml',
            suite: 'e2e'
        },

        remoteReporter: {
            host: 'localhost',
            port: '9876'
        },

        plugins: [
            'karma-jasmine',
            'karma-ng-scenario',
            'karma-chrome-launcher',
            'karma-junit-reporter',
            'karma-remote-reporter'
        ]

    });
};
