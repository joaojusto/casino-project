Package.describe({
  name: 'etags:core',
  version: '0.0.1',
  summary: ''
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  var packages = [
    'accounts-password',
    'fourseven:scss',
    'iron:router',
    'meteor-platform',
    'poetic:materialize-scss',
    'tap:i18n',
    'etags:breakdowns',
    'etags:users',
    'etags:toast'
  ];

  api.use(packages);
  api.imply(packages);
});
