'use strict';

module.exports = {
  build: [
    'clean:dist',
    [
      'copy',
      'favicon',
      'fonts',
      'icons',
      'images'
    ],
    'styles:lint',
    'styles',
    'templates',
    'clean:temp',
    'size-report'
  ]
};
