Package.describe({
  name: 'etags:toast',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('poetic:materialize-scss');
  api.addFiles('lib.js', 'client');
  api.export('Toast');
});
