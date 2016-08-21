const includeAll = require('include-all');

describe('browser end to end tests', () => {
  var tests;
  var server = require('../app/app');

  // before(() => {
  //   server = require('../app/app');
  // });

  tests = includeAll({
    dirname: require('path').resolve(__dirname, 'integration'),
    filter: /(.+)\.js$/
  }) || {};

  Object.keys(tests).forEach(testSet => {
    tests[testSet](server);
  });
});
