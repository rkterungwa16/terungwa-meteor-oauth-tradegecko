Package.describe({
  name: 'meteor-oauth-tradegecko',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rkterungwa16/meteor-oauth-tradegecko.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.9');
  api.use('ecmascript');
  api.mainModule('meteor-oauth-tradegecko.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-oauth-tradegecko');
  api.mainModule('meteor-oauth-tradegecko-tests.js');
});
