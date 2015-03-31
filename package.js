Package.describe({
  summary: "A pattern to display application errors to the user using Foundation Alerts",
  version: "0.0.1",
  name: "meloncon:foundation-errors",
  description: "A pattern to display application errors to the user using Foundation Alerts",
  documentation: './README.md',
  homepage: "https://github.com/Meloncon/meteor-foundation-errors",
  author: "Matt Meloncon <mmeloncon@gmail.com>",
  git: "https://github.com/Meloncon/meteor-foundation-errors.git"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@0.9.4');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  api.export('Errors');
});

Package.onTest(function(api) {
  api.use('meloncon:foundation-errors', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');
  api.addFiles('errors_tests.js', 'client');
});
