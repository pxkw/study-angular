exports.config = {
  capabilities: {
    'browserName': 'phantomjs'
  },
  specs: ['app_spec.js'],
  jasmineNodeOpts: {
    showColors: true, 
  },
  baseUrl: 'http://localhost:8080'
};

