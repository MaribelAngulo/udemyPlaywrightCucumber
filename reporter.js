const reporter = require('cucumber-html-reporter')

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'reports/cucumber_report.html',
  reportSuiteAsScenario: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    'App Version': '2.0.0',
    'Test Environment': 'QA',
    Browser: 'Chrome 136.0.7103.114 (Official Build) (64-bit)',
    Platform: 'Windows 10',
  },
}

reporter.generate(options)
