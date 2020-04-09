// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const JSONReporter = require('jasmine-json-test-reporter');

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/E2E-testing/*.e2e-spec.ts'
  ],
  // Below "chromeOptions" configuration is for run the E2E cases without open chrome browser.
  capabilities: {
    // chromeOptions: {
    //   args: ['--headless']
    // },
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () { }
  },
  resultJsonOutputFile: 'report.json',
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });

    jasmine.getEnv().addReporter(new JSONReporter({
      file: 'jasmine-test-results.json',
      beautify: true,
      indentationLevel: 4
    }));

    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  },
  onComplete() {
    console.log('E2E finished - retrieving coverage from browser');
  }
};