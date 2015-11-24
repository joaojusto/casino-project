Package.describe({
  name: 'etags:work-orders',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('templating', 'client');

  api.addFiles([
    'client/work_orders.html',
    'client/list.html',
    'client/work_order.html',
  ], 'client');
  api.addFiles('lib.js', 'server');
});
