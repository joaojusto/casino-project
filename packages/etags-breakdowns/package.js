Package.describe({
  name: 'etags:breakdowns',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3')
  api.use('templating', 'client');

  api.addFiles([
    'client/breakdown.html',
    'client/breakdown.js',
    'client/breakdowns.html',
    'client/edit.html',
    'client/edit.js',
    'client/form.html',
    'client/form.js',
    'client/list.html',
    'client/list.js',
    'client/new.html',
    'client/new.js',
  ], 'client');
  api.addFiles('lib.js', 'server');
});
