Package.describe({
  name: 'etags:users',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('lib.js');
});
