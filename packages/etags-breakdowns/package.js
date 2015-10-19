Package.describe({
  name: 'etags:breakdowns',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3')
  api.use('templating', 'client');

  api.addFiles('client/breakdown.html', 'client');
  api.addFiles('client/breakdown.js', 'client');
  api.addFiles('client/breakdowns.html', 'client');
  api.addFiles('client/edit.html', 'client');
  api.addFiles('client/edit.js', 'client');
  api.addFiles('client/form.html', 'client');
  api.addFiles('client/form.js', 'client');
  api.addFiles('client/list.html', 'client');
  api.addFiles('client/list.js', 'client');
  api.addFiles('client/new.html', 'client');
  api.addFiles('client/new.js', 'client');
  api.addFiles('lib.js', 'server');
});
