Package.describe({
  name: 'terungwa:meteor-oauth-tradegecko',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'OAuth2 for Tradegecko',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rkterungwa16/meteor-oauth-tradegecko.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('accounts-ui', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', ['server']);
  api.use(['underscore', 'service-configuration'], ['client', 'server']);
  api.use(['random', 'templating'], 'client');

  api.export('Tradegecko');

  api.addFiles('tradegecko-server.js', 'server');
  api.addFiles('tradegecko-client.js', 'client');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('tradegecko-client');
//   api.use('tradegecko-server');
//   api.mainModule('tradegecko-tests.js');
// });
