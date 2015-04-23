const path = require('path');

module.exports = require('../webpack.config');
module.exports.entry = __dirname + '/index.js';
module.exports.output = {
  path: __dirname + '/tmp',
  filename: 'bundle.js'
};
module.exports.resolve.alias['ember-mocha-adapter'] =
  'ember-mocha-adapter/adapter';
